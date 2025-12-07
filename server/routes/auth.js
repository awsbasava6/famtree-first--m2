// server/routes/auth.js
import express from "express";
import dotenv from "dotenv";
import twilio from "twilio";
import User from "../models/user.js";

dotenv.config();
const router = express.Router();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const otpStore = new Map();

// Create FamTree ID: first letters of location + full name + last 4 of Aadhaar
function createFamTreeId(payload) {
  const f = (s) => (s && s.toString().trim().charAt(0).toUpperCase()) || "X";
  const initials = `${f(payload.country)}${f(payload.state)}${f(payload.district)}${f(payload.taluk)}${f(payload.village)}`;
  const last4Aadhaar = (payload.aadhaar || "").slice(-4);
  const fullName = `${payload.firstName}${payload.middleName ? payload.middleName : ""}${payload.lastName}`;
  return `${initials}${fullName.toUpperCase()}${last4Aadhaar}`;
}

// POST /api/auth/send-otp
router.post("/send-otp", async (req, res) => {
  try {
    const payload = req.body;
    let phoneNumber = payload.phoneNumber;

    if (!phoneNumber) return res.status(400).json({ success: false, message: "phoneNumber required" });

    // auto-add +91 if missing for India numbers
    if (!phoneNumber.startsWith("+")) phoneNumber = "+91" + phoneNumber;

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(phoneNumber, { otp, payload, createdAt: Date.now() });

    // send SMS via Twilio
    const msg = await client.messages.create({
      body: `Your Digi-FamTree OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    console.log(`OTP ${otp} sent to ${phoneNumber}. Message SID: ${msg.sid}`);
    return res.json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    console.error("Error send-otp:", err);
    return res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// POST /api/auth/verify-otp
router.post("/verify-otp", async (req, res) => {
  try {
    let { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) return res.status(400).json({ success: false, message: "phoneNumber and otp required" });

    if (!phoneNumber.startsWith("+")) phoneNumber = "+91" + phoneNumber;

    const record = otpStore.get(phoneNumber);
    if (!record) return res.status(400).json({ success: false, message: "No OTP requested for this number" });

    if (Date.now() - record.createdAt > 5 * 60 * 1000) {
      otpStore.delete(phoneNumber);
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (record.otp !== otp.toString()) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    const payload = record.payload;
    let user = await User.findOne({ phoneNumber });

    if (!user) {
      let famTreeId = createFamTreeId(payload);
      while (await User.findOne({ famTreeId })) {
        famTreeId = createFamTreeId(payload);
      }

      user = new User({
        ...payload,
        verified: true,
        famTreeId,
      });
      await user.save();
    } else {
      // update user
      Object.assign(user, payload);
      user.verified = true;
      if (!user.famTreeId) user.famTreeId = createFamTreeId(payload);
      await user.save();
    }

    otpStore.delete(phoneNumber);

    // send FamTree ID via SMS
    await client.messages.create({
      body: `Your Digi-FamTree ID: ${user.famTreeId}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    return res.json({ success: true, message: "OTP verified and account created", user });
  } catch (err) {
    console.error("Error verify-otp:", err);
    return res.status(500).json({ success: false, message: "OTP verification failed" });
  }
});

export default router;


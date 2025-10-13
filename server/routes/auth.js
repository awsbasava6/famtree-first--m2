
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

// In-memory OTP store (for demo). For production use DB with TTL.
const otpStore = new Map();

// helper: create FamTree ID as described
function createFamTreeId(payload) {
  // get first two letters of each field (or fallback 'XX')
  const f = (s) => (s && s.toString().trim().slice(0, 2).toUpperCase()) || "XX";
  const initials = `${f(payload.country)}${f(payload.state)}${f(payload.district)}`;
  const phoneTail = (payload.phoneNumber || "").replace(/\D/g, "").slice(-4);
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${initials}${phoneTail}${rand}`;
}

// POST /api/auth/send-otp
// Body: { firstName, middleName, lastName, country, state, district, taluk, village, pincode, phoneNumber }
router.post("/send-otp", async (req, res) => {
  try {
    const payload = req.body;
    const phoneNumber = payload.phoneNumber;
    if (!phoneNumber) return res.status(400).json({ success: false, message: "phoneNumber required" });

    // generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // store form data plus otp in memory keyed by phoneNumber
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
// Body: { phoneNumber, otp }
router.post("/verify-otp", async (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) return res.status(400).json({ success: false, message: "phoneNumber and otp required" });

    const record = otpStore.get(phoneNumber);
    if (!record) return res.status(400).json({ success: false, message: "No OTP requested for this number" });

    // Optional: expire OTP after e.g. 5 minutes
    const ageMs = Date.now() - record.createdAt;
    if (ageMs > 5 * 60 * 1000) { // 5 minutes
      otpStore.delete(phoneNumber);
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (record.otp !== otp.toString()) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    // OTP valid -> create or update user with payload
    const payload = record.payload;
    let user = await User.findOne({ phoneNumber });

    if (!user) {
      // generate unique famTreeId
      let famTreeId = createFamTreeId(payload);
      // ensure uniqueness (very small chance of collision)
      while (await User.findOne({ famTreeId })) {
        famTreeId = createFamTreeId(payload);
      }

      user = new User({
        firstName: payload.firstName,
        middleName: payload.middleName,
        lastName: payload.lastName,
        country: payload.country,
        state: payload.state,
        district: payload.district,
        taluk: payload.taluk,
        village: payload.village,
        pincode: payload.pincode,
        phoneNumber,
        verified: true,
        famTreeId,
      });
      await user.save();
    } else {
      // update fields & mark verified
      user.firstName = payload.firstName || user.firstName;
      user.middleName = payload.middleName || user.middleName;
      user.lastName = payload.lastName || user.lastName;
      user.country = payload.country || user.country;
      user.state = payload.state || user.state;
      user.district = payload.district || user.district;
      user.taluk = payload.taluk || user.taluk;
      user.village = payload.village || user.village;
      user.pincode = payload.pincode || user.pincode;
      user.verified = true;
      // ensure famTreeId exists
      if (!user.famTreeId) {
        let famTreeId = createFamTreeId(payload);
        while (await User.findOne({ famTreeId })) {
          famTreeId = createFamTreeId(payload);
        }
        user.famTreeId = famTreeId;
      }
      await user.save();
    }

    // OTP consumed
    otpStore.delete(phoneNumber);

    return res.json({ success: true, message: "OTP verified and account created", user });
  } catch (err) {
    console.error("Error verify-otp:", err);
    return res.status(500).json({ success: false, message: "OTP verification failed" });
  }
});

export default router;


// server/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  country: String,
  state: String,
  district: String,
  taluk: String,
  village: String,
  pincode: String,
  phoneNumber: { type: String, required: true, unique: true },
  verified: { type: Boolean, default: false },
  famTreeId: { type: String, unique: true, sparse: true },
}, { timestamps: true });

export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },

    country: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    taluk: { type: String, required: true },
    village: { type: String, required: true },

    pincode: { type: String, required: true },

    aadhaar: {
      type: String,
      required: true,
      minlength: 12,
      maxlength: 12,
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    famTreeId: {
      type: String,
      unique: true,
      sparse: true,
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);


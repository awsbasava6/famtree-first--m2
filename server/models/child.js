
import mongoose from "mongoose";

const childSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dob: { type: String },
    gender: { type: String },
    photo: { type: String },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    useraccount: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // if child has login
  },
  { timestamps: true }
);

export default mongoose.model("child", childSchema);

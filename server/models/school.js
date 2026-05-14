
import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    date: String,
    child: { type: mongoose.Schema.Types.ObjectId, ref: "child" },

    // Additional school-specific fields
    schoolname: { type: String },
    grade: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("school", schoolSchema);

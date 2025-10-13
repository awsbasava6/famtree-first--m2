
// server/models/college.js
import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  date: String,
  child: { type: mongoose.Schema.Types.ObjectId, ref: "child" },

  // Additional college-specific fields
  collegename: { type: String },
  degree: { type: String },
}, { timestamps: true });

export default mongoose.model("college", collegeSchema);

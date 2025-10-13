
import mongoose from "mongoose";

const marriageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    date: String,
    child: { type: mongoose.Schema.Types.ObjectId, ref: "child" },

    // Additional marriage-specific fields
    spouseName: { type: String },
    marriagePlace: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("marriage", marriageSchema);

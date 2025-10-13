
import mongoose from "mongoose";

const lifecyclebase = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    date: String,
    child: { type: mongoose.Schema.Types.ObjectId, ref: "child" },
  },
  { timestamps: true }
);

export default lifecyclebase;

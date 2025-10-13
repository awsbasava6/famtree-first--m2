
import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

export default router;

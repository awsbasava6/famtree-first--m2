
// server/routes/lifecycleRoutes.js
import express from "express";
import { protect } from "../middleware/auth.js";
import School from "../models/school.js";
import College from "../models/college.js";
import Marriage from "../models/marriage.js";

const router = express.Router();

/* ======== SCHOOL ======== */
// POST /api/lifecycle/school/:childId
router.post("/school/:childId", protect, async (req, res) => {
  try {
    const entry = await School.create({
      ...req.body,
      child: req.params.childId,
    });
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/lifecycle/school/child/:childId
router.get("/school/child/:childId", protect, async (req, res) => {
  const items = await School.find({ child: req.params.childId });
  res.json(items);
});

/* ======== COLLEGE ======== */
router.post("/college/:childId", protect, async (req, res) => {
  try {
    const entry = await College.create({
      ...req.body,
      child: req.params.childId,
    });
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/college/child/:childId", protect, async (req, res) => {
  const items = await College.find({ child: req.params.childId });
  res.json(items);
});

/* ======== MARRIAGE ======== */
router.post("/marriage/:childId", protect, async (req, res) => {
  try {
    const entry = await Marriage.create({
      ...req.body,
      child: req.params.childId,
    });
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/marriage/child/:childId", protect, async (req, res) => {
  const items = await Marriage.find({ child: req.params.childId });
  res.json(items);
});

export default router;

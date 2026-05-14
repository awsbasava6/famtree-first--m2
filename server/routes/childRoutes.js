
// server/routes/childRoutes.js
import express from "express";
import { protect } from "../middleware/auth.js";
import Child from "../models/child.js";
import User from "../models/user.js";

const router = express.Router();

// Add child
router.post("/", protect, async (req, res) => {
  const { name, dob, gender, photo, createChildAccount, childEmail, childPassword } = req.body;
  try {
    let childUser = null;

    if (createChildAccount && childEmail && childPassword) {
      childUser = await User.create({
        name,
        email: childEmail,
        password: childPassword,
        role: "child",
      });
    }

    const child = await Child.create({
      name,
      dob,
      gender,
      photo,
      parent: req.user.id,
      userAccount: childUser?._id,
    });

    res.status(201).json(child);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all children for parent
router.get("/", protect, async (req, res) => {
  const children = await Child.find({ parent: req.user.id });
  res.json(children);
});

// Get child by ID
router.get("/:id", protect, async (req, res) => {
  const child = await Child.findById(req.params.id);
  res.json(child);
});

export default router;

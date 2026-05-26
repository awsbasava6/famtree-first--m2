import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import uploadRoutes from "./routes/uploadRoutes.js";

/* LOAD ENV VARIABLES */

dotenv.config();

/* CREATE EXPRESS APP */

const app = express();

/* DEBUG ENV VARIABLES */

console.log(
  "TWILIO_ACCOUNT_SID:",
  process.env.TWILIO_ACCOUNT_SID
    ? "✅ Loaded"
    : "❌ Missing"
);

console.log(
  "TWILIO_AUTH_TOKEN:",
  process.env.TWILIO_AUTH_TOKEN
    ? "✅ Loaded"
    : "❌ Missing"
);

console.log(
  "TWILIO_PHONE_NUMBER:",
  process.env.TWILIO_PHONE_NUMBER
    ? "✅ Loaded"
    : "❌ Missing"
);

console.log(
  "MONGO_URI:",
  process.env.MONGO_URI
    ? "✅ Loaded"
    : "❌ Missing"
);

/* MIDDLEWARES */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* HEALTH CHECK ROUTE */

app.get("/", (req, res) => {
  res.status(200).json({
    message: "🚀 Backend Server Running Successfully",
  });
});

/* AUTH ROUTES */

app.use("/api/auth", authRoutes);

/* UPLOAD ROUTES */

app.use("/api/upload", uploadRoutes);

/* CONNECT MONGODB */

mongoose
  .connect(process.env.MONGO_URI, {
    tls: true,
    tlsInsecure: true,
    serverSelectionTimeoutMS: 10000,
  })

  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })

  .catch((err) => {
    console.error(
      "❌ MongoDB Connection Error:",
      err
    );
  });

/* START SERVER */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});

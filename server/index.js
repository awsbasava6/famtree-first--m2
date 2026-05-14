import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

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

app.use(cors());

app.use(express.json());

/* AUTH ROUTES */

app.use(
  "/api/auth",
  authRoutes
);

/* UPLOAD ROUTES */

app.use(
  "/api/upload",
  uploadRoutes
);

/* CONNECT MONGODB */

mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .then(() =>
    console.log(
      "✅ MongoDB Connected"
    )
  )

  .catch((err) =>
    console.error(
      "❌ MongoDB Connection Error:",
      err
    )
  );

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `🚀 Server running on port ${PORT}`
  )
);

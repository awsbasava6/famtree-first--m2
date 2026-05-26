const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  tls: true,
  tlsInsecure: true,
  retryWrites: true,
  w: "majority",
  serverSelectionTimeoutMS: 10000
})
.then(() => {
  console.log("✅ MongoDB Connected");
})
.catch((err) => {
  console.log("❌ MongoDB Connection Error:", err);
})
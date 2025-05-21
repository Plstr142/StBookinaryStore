// const express = require("express");
// const app = express();

// const mongoose = require("mongoose");

// const port = process.env.PORT || 5000;

// **** routes; ****
// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/test");

//   app.use("/", (req, res) => {
//     res.send("StBookinary Server is running!");
//   });

//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
//   });

//   console.log("MongoDB connect successfully!");
// }

// main().catch((err) => console.log(err));

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
// Password : Skqe68bgoE3EFzd8
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

// Initialize server routes and start listening
function initServer() {
  // Middleware / Routes
  app.use("/", (req, res) => {
    res.send("📘 StBookinary Server is running!");
  });

  // Start server
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
}

// Main entry point
async function main() {
  await connectDB();
  initServer();
}

main();

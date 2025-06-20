const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

// Initialize server routes and start listening
function initServer() {
  // middleware
  app.use(express.json());
  app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "https://stbookinarystore-app-frontend.vercel.app",
      ],
      credentials: true,
    })
  );

  // get server is running
  app.get("/", (req, res) => {
    res.send("StBookinary Store is running!");
  });

  // Middleware / Routes
  // app.use("/", (req, res) => {
  //   res.send("StBookinary Server is running!");
  // });

  // main api routes
  const bookRoutes = require("./src/books/book.route.js");
  const orderRoutes = require("./src/orders/order.route.js");
  const userRoutes = require("./src/users/user.route.js");
  const adminRoutes = require("./src/stats/admin.stats.js");

  app.use("/api/books", bookRoutes);
  app.use("/api/orders", orderRoutes);
  app.use("/api/auth", userRoutes);
  app.use("/api/admin", adminRoutes);

  // Start server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

// Main entry point
async function main() {
  await connectDB();
  initServer();
}

main();

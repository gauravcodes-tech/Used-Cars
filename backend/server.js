import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import carRoutes from "./routes/carRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import wishlistRoutes from "./routes/wishlistRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Used Car API Running 🚗",
  });
});

app.use("/api/cars", carRoutes);
app.use("/api/wishlist", wishlistRoutes);

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
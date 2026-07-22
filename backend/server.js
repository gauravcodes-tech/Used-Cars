import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import carRoutes from "./routes/carRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Used Car API Running 🚗"
  });
});

app.use("/api/cars", carRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
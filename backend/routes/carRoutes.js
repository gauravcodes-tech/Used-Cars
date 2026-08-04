import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
  getDashboardStats
} from "../controllers/carController.js";

const router = express.Router();

router.get("/dashboard", getDashboardStats);

// Public
router.get("/", getCars);
router.get("/:id", getCarById);

// Admin Only
router.post("/", protect, adminOnly, createCar);
router.put("/:id", protect, adminOnly, updateCar);
router.delete("/:id", protect, adminOnly, deleteCar);

export default router;
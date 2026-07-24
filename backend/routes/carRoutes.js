import express from "express";

import {
  getCars,
  getCarById,
  createCar,
  updateCar,
} from "../controllers/carController.js";

const router = express.Router();

router.get("/", getCars);

router.get("/:id", getCarById);

router.post("/", createCar);

router.put("/:id", updateCar);

export default router;
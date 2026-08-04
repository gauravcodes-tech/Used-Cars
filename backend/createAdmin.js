import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import User from "./models/User.js";
import connectDB from "./config/db.js";

dotenv.config();

await connectDB();

const password = await bcrypt.hash("Admin@123", 10);

const exists = await User.findOne({
  email: "admin@usedcars.com",
});

if (exists) {

  console.log("Admin already exists");

  process.exit();

}

await User.create({

  name: "System Admin",

  email: "admin@usedcars.com",

  password,

  role: "admin",

});

console.log("Admin Created");

process.exit();
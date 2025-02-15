import express from "express";
import { check } from "express-validator";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Register Route
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
  ],
  registerUser
);

// Login Route
router.post("/login", loginUser);

export default router;

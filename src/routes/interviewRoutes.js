import express from "express";
import { createInterview, getAllInterviews, getInterviewById, updateInterview, deleteInterview } from "../controllers/interviewController.js";
import authenticateUser from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",authenticateUser, createInterview);
router.get("/",authenticateUser, getAllInterviews);
router.get("/:id",authenticateUser, getInterviewById);
router.put("/:id",authenticateUser, updateInterview);
router.delete("/:id",authenticateUser, deleteInterview);

export default router;

import express from "express";

import {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  submitQuiz,
  getMyResults
} from "../controllers/quizController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createQuiz);

router.post("/submit", protect, submitQuiz);

router.get("/", getAllQuizzes);

router.get("/results/my", protect, getMyResults);

router.get("/:id", getQuizById);

export default router;
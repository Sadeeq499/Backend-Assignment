import express from "express";
import {
  UpdateQuestionController,
  createQuestionController,
  deleteQuestionController,
  getAllQuestionsController,
} from "../Controllers/questionsController.js";
const router = express.Router();
import { isAdmin, authGuard } from "../middleware/authGuard.js";

router.get("/getAllQuestions", authGuard, getAllQuestionsController);
router.post("/createQuestion", authGuard, isAdmin, createQuestionController);
router.put("/updateQuestion/:id", authGuard, isAdmin, UpdateQuestionController);
router.delete(
  "/deleteQuestion/:id",
  authGuard,
  isAdmin,
  deleteQuestionController
);

export default router;

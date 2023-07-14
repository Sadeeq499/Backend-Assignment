import express from "express";
import { createTestCaseController } from "../Controllers/testCaseController.js";
import { isAdmin, authGuard } from "../middleware/authGuard.js";
const router = express.Router();

router.post(
  "/question/:questionId",
  authGuard,
  isAdmin,
  createTestCaseController
);
// router.post("/", (req, res) => res.send("Hello World"));

export default router;

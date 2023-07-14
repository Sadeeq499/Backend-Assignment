import express from "express";
import axios from "axios";
import {
  SphereEngineController,
  SubmissionController,
} from "../Controllers/sphereEngine.js";
const router = express.Router();

router.get("/test", SphereEngineController);
router.post("/problem", SubmissionController);

export default router;

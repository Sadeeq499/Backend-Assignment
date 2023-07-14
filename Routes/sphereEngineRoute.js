import express from "express";
import { SphereEngineController } from "../Controllers/sphereEngine";
const router = express.Router();

router.get("/test", SphereEngineController);

export default router;

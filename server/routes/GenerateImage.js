import express from "express";
import { generateImage } from "../controllers/GenerateAIImage.js";

//get method to call the controller
const router = express.Router();
router.post("/", generateImage);

export default router;

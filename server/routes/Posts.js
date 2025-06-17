import express from "express";
import { createPost, getAllPosts } from "../controllers/Posts.js";

//get method to call the controller
const router = express.Router();
router.get("/", getAllPosts);
router.post("/", createPost);

export default router;

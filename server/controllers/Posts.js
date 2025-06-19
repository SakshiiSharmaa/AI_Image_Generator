// Controller is the defualt func to get called on every route)
import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
// To store pictures in cloud using cloudinary (create a account)
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true //Recommended to ensure HTTPS URLS
});

console.log("########## cloudinary",cloudinary.config());

// Get All the posts
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    next(
      createError(
        error.status,
        error?.response?.data?.error?.message || error.message
      )
    );
  }
};

// Create Post
export const createPost = async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;
    console.log("###### BODY ####", req.body)

    const photoUrl = await cloudinary.uploader.upload(photo);
    console.log("###### newPost1 ####", photoUrl)

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl?.secure_url,
    });
    console.log("#### newPost2 ####", newPost)
    return res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    next(
      createError(
        error.status,
        error?.response?.data?.error?.message || error.message
      )
    );
  }
};

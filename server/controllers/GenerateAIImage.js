import axios from "axios";
import * as dotenv from "dotenv";
import { createError } from "../error.js";

dotenv.config();

// Generating image using Stability AI
export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post(
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
      {
        text_prompts: [
          {
            text: prompt,
          },
        ],
        cfg_scale: 7, // Classifier-Free Guidance Scale: controls how closely the image follows the prompt
        width: 1024,
        height: 1024,
        samples: 1, // Number of images to generate per request
        steps: 30, // Number of diffusion steps used to generate the image.
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.STABILITYAI_API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const base64Image = `data:image/png;base64,${response.data.artifacts[0].base64}`;

    return res.status(200).json({
      photo: base64Image,
    });
  } catch (error) {
    console.error(
      "Error generating image:",
      error.response?.data || error.message
    );

    next(
      createError(
        error.status,
        error?.response?.data?.error?.message || error.message
      )
    );
  }
};

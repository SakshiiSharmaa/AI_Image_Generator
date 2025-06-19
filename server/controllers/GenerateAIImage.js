import axios from 'axios';
import * as dotenv from "dotenv";
import { createError } from "../error.js";

dotenv.config();

//Generating image using Stability AI
export const generateImage = async (req, res, next) => {
  try{
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    console.log("[]############ prompt : ", prompt)

    const response = await axios.post(
      'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
      {
        text_prompts: [
          {
            text: prompt,
          },
        ],
        cfg_scale: 7,
        width: 1024,
        height: 1024,
        samples: 1,
        steps: 30,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.STABILITYAI_API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    const base64Image = `data:image/png;base64,${response.data.artifacts[0].base64}`;

    console.log("[]****** BASE64 image : ", base64Image);

    return res.status(200).json({
        photo: base64Image
    });
  } catch (error) {
    console.error('Error generating image:', error.response?.data || error.message);

    next(
      createError(
        error.status,
        error?.response?.data?.error?.message || error.message
      )
    );
  }
};

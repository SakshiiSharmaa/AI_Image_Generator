// cors is for security purpose and origin access
import cors from "cors";
// mongodb access
import mongoose from "mongoose";
// maintaining secret in env
import * as dotenv from "dotenv";
import express from "express";
import PostRouter from "./routes/Posts.js";
import GenerateImageRouter from "./routes/GenerateImage.js";

dotenv.config();

const app = express();
app.use(cors());
// payload limit is 50 mb
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

// Default GET
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello Devlopers!",
  });
});

// To connect to mongodb
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to DB");
    console.log(error);
  }
};

// Start the server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();

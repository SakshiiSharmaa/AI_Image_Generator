// cors is for security purpose and origin access
import cors from "cors";
//mongodb access
import mongoose from "mongoose";
//maintaining secret in env
import * as dotenv from "dotenv";
import express from "express";
import PostRouter from "./routes/Posts.js";

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

//Default GET
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello Devlopers!",
  });
});

//function to connect to mongodb
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
      console.error("Failed to connect to DB");
      console.log(error);
    });
};

//Start the server
const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();

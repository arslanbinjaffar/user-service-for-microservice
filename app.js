// user-service.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/routes.js";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("", userRouter);




mongoose.set('strictQuery',true)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT || 4001))
  .then(() => console.log(`LISTENING AT THE PORT ${process.env.PORT}`))
  .catch((err) => console.log(err));
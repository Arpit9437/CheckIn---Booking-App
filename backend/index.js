import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/Hotel.js";
import userRoute from "./routes/User.js";
import roomRoute from "./routes/Room.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const connectDb = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB host : ${response.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

//if the mongodb connection disconnects this snippet tries to reconnect.
mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected");
});

app.listen(PORT, () => {
    connectDb();
    console.log(`Connected to port ${PORT}`);
});



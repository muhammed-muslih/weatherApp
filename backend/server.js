import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import AppError from "./utils/appError.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(cors());

//database connection
connectDB();

//catch not founded routes and forwards to error handler
server.all("*", (req, res, next) => {
    next(new AppError("Not found", 404));
  });
  
  //error handler
  server.use(errorHandler);

//server connection
const PORT = process.env.PORT || 3000;
server.listen(PORT, (err) => {
  if (err) console.log("server connection error".bgRed);
  console.log(`server listening on port ${PORT}`.bgMagenta);
});

import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(cors());

//datbase connection
connectDB();

//server connection
const PORT = process.env.PORT || 3000;
server.listen(PORT, (err) => {
  if (err) console.log("server connection error".bgRed);
  console.log(`server listening on port ${PORT}`.bgMagenta);
});

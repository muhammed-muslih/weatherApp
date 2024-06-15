import asyncHandler from "express-async-handler";
import AppError from "../utils/appError.js";

const getWeatherData = asyncHandler(async(req,res,next)=>{
    const {latitude, longitude} = req.body;

    
      res.status(200).json({
        status: 'success',
        data: data
      })
})
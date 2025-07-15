//we want that when our first file is going to load then our all the environment varible is going to load
// require('dotenv').config;
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"; 
import connectionDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectionDB();

/*
import express from 'express';
const app = express();

;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

       //there is a chance that app is throwing error so there is listerners in express 
       app.on("error", (error)=>{
        console.log("ERRR: ", error);
        throw error;
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`); //process.env.PORT means on the running process we are taking PORT varible from the environment varibles
        
       })

    } catch (error) {
        console.error("ERROR ", error)
        throw error;
    }
})();
*/
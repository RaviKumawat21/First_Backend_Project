import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDB = async () => {
    try {
        const connectionInstance = await mongoose.connect( `${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`/n MongoDB connected !! DB HOST: ${connectionInstance}`);
        
    } catch (error) {
        console.log("MONGO_DB connection Error", error);
        process.exit(1);
        
    }
}
export default connectionDB;

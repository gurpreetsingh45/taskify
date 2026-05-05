import { MONGO_URL } from "./env.js";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Succesfully conneced to DB");
  } catch (err) {
    console.log(`MongoDB connection failed : ${err}`);
    process.exit(1);
  }
};

export default connectDB;

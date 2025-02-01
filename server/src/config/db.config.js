import mongoose from "mongoose";
import { MONGODB_URL, NODE_ENV } from "./server.config";

const connectToDB = async () => {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(MONGODB_URL);
      console.log("Connected to DB");
    }
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};

export default connectToDB;

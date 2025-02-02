const mongoose = require("mongoose");
const { MONGODB_URL, NODE_ENV } = require("./server.config");

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

module.exports = connectToDB;

require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successful to Database");
  } catch (error) {
    console.log("Database Connection Failed");
    process.exit();
  }
};

module.exports = connectDb;

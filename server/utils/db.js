const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/react-yelpcamp";

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

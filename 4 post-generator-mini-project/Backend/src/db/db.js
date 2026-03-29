const mongoose = require("mongoose");

connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI)

  console.log("Connected to db");
}

module.exports = connectDB;
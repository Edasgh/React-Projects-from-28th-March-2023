const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();

const mongo_uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: true, // this method is not supported
    });

    console.log(`Connected to database : ${conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;

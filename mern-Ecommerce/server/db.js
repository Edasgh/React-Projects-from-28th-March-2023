
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connected to mongodb successfully")).catch((err)=>console.log(err))
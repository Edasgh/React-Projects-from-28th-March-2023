const express = require("express");
const body_parser=require("body-parser");
const cors =require("cors");

const app=express();
const db=require("./db")
const productRouter=require("./routes/productRoute.js")
var corsOptions={
    origin:"http://localhost:3000"
}


const Port=8080 || process.env.PORT

app.use(cors(corsOptions));
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

db.on('error',console.error.bind(console,"MongoDB connection error : "))

app.get("/",(req,res)=>{
    res.send("Welcome to Food Ordering App")
})
app.listen(Port,(req,res)=>{
    console.log(`Server listening on port ${Port} `)
})
app.use("/api/",productRouter)
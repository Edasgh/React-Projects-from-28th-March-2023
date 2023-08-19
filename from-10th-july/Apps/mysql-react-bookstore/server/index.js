const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv/config");
const mysql=require("mysql");

const app= express();
const port=process.env.PORT;

//setting up middleware
app.use(express.json());
app.use(cors())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.MYSQL_PW,
    database:"bookstore",
})

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to bookstore</h1>")
})

app.listen(port,()=>{
    console.log(`bookstore server listening at port no. ${port} `)
})
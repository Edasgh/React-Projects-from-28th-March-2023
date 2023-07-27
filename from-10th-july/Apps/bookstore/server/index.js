import express from "express";
import mysql from "mysql";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(cors());


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:`${process.env.MYSQL_PW}`


})





app.get("/",(req,res)=>{
 res.send("<h1>Welcome to bookstore server</h1>")
})

app.listen(port,()=>{
console.log(`Bookstore server listening at port no. ${port}`);
})

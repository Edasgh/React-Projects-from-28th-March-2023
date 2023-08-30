const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv/config");
const mysql=require("mysql2");
// install the mysql2 instead of mysql package to avoid the "Client does not support authentication protocol requested by server ; consider upgrading MYSQL-CLIENT" sql error

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
    insecureAuth:true,
})

//"https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=600"

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to bookstore</h1>")
})

app.listen(port,()=>{
    console.log(`Bookstore server listening at port no. ${port} `)
})


app.get("/books",(req,res)=>{
    const q ="SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err){
          return (res.json(err))        
        }else{
            return (res.json(data))
        }
    })
})

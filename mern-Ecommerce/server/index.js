const express = require("express");
const app =express();
const db=require("./db");
const dotenv = require("dotenv");
dotenv.config();

const port =process.env.PORT

const userRoute=require("./routes/user.js")
const authRoute=require("./routes/auth.js")
const productRoute=require("./routes/product.js")
const cartRoute=require("./routes/cart.js")
const orderRoute=require("./routes/order.js")
const stripeRoute = require("./routes/stripePayment");
// const cors = require("cors");

app.get("/",(req,res)=>{
res.send("Welcome to the server of myStore")
})

app.use(express.json());
// app.use(cors());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(port,()=>{
    console.log(`Server listening on port no : ${port}`)
})


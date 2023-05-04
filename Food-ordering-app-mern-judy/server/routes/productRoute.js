const express= require("express")

const router=express.Router()

const Product=require("../models/productModel.js")

router.get("/products",async(req,res)=>{
    try {
        const products=Product.find()
        res.status(200).send({data:products})
    } catch (error) {
        res.status(400)
        console.log(error)
    }
})

module.exports=router
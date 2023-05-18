const Product = require("../models/Product");
const { verifyToken , verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();

//CREATE A PRODUCT
router.post("/create",verifyTokenAndAdmin,async(req,res)=>{
      const newProduct = new Product(req.body);
      try {
        const savedProduct= await newProduct.save();
        res.status(201).json({savedProduct});
      } catch (error) {
        res.status(500).json(error)
      }
})

// UPDATE THE PRODUCT : PUT METHOD
router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{

    try {
        const updatedProduct= await Product.findByIdAndUpdate(req.params.id,{
            // take everything from req.body and update
            $set:req.body
        },{new:true})
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE THE PRODUCT => DELETE METHOD

router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
     await Product.findByIdAndDelete(req.params.id)
     res.status(200).json("Product deleted successfully!")
    }catch(error){
        res.status(500).json(error)
    }
})

//GET ANY PRODUCT 

router.get("/find/:id",async(req,res)=>{
    try{
     const product = await Product.findById(req.params.id)
     res.status(200).json(product)
    }catch(error){
        res.status(500).json(error)
    }
})

//GET ALL PRODUCTS

router.get("/",async(req,res)=>{
    try{
     const products = await Product.find();
// find all products
     res.status(200).json(products)
    }catch(error){
        res.status(500).json(error)
    }
})


// //GET USER STATS ( per month)
// router.get("/stats",verifyTokenAndAdmin,async (req,res)=>{
//     const date = new Date();
//     const lastYear= new Date(date.setFullYear(date.getFullYear() -1))
//     // The above code returns the today of last year
//     try {
//         const statsData = await User.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             {
//               $project: {
//                 month: { $month: "$createdAt" },
//               },
//             },
//             {
//               $group: {
//                 _id: "$month",
//                 total: { $sum: 1 },
//               },
//             },
//           ]);
//           res.status(200).json(statsData)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

module.exports=router
const User = require("../models/User");
const { verifyToken , verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();

// UPDATE THE USER DETAILS : PUT METHOD
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    // if user updates the password then encrypt it again
    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()
    }

    try {
        const updatedUser= await User.findByIdAndUpdate(req.params.id,{
            // take everything from req.body and update
            $set:req.body
        },{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE THE USER ACCOUNT => DELETE METHOD

router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{
     await User.findByIdAndDelete(req.params.id)
     res.status(200).json("User Account deleted successfully!")
    }catch(error){
        res.status(500).json(error)
    }
})

//GET ANY USER => ADMIN ACTIONS 

router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
     const user = await User.findById(req.params.id)
     //Don't show the password to the admin but other user details
     const {password , ...others} = user._doc;

     res.status(200).json(others)
    }catch(error){
        res.status(500).json(error)
    }
})

//GET ALL USERS => ADMIN ACTION

router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    //get only latest 5 new users
    // if there's a ?new=true query in the url 
    const query=req.query.new;
    try{
     const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
// find all users
     res.status(200).json(users)
    }catch(error){
        res.status(500).json(error)
    }
})


//GET USER STATS ( per month)
router.get("/stats",verifyTokenAndAdmin,async (req,res)=>{
    const date = new Date();
    const lastYear= new Date(date.setFullYear(date.getFullYear() -1))
    // The above code returns the today of last year
    try {
        const statsData = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
              $project: {
                month: { $month: "$createdAt" },
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: 1 },
              },
            },
          ]);
          res.status(200).json(statsData)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router
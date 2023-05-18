const router = require("express").Router();
const User = require("../models/User.js");
const dotenv = require("dotenv");
dotenv.config();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
  } catch (error) {
   res.status(500).json(error);
  }
});

//Login
router.post("/login", async (req, res) => {
    try {
    const user = await User.findOne({
      username: req.body.username,
    });
    const hasedPassword=CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
    const Originalpassword=hasedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword=req.body.password
  
   if(!user || Originalpassword != inputPassword ){
    res.status(401).json("Wrong Credentials")
   }
    //wrote this spread operator to prevent revealing of the password to the user
    const {password , ...others}=user._doc;
    // mongodb saves all the informations in the _doc folder
    
    const accessToken=jwt.sign({
      id:user._id, // id and isAdmin are the payloads here
      isAdmin:user.isAdmin
    },process.env.JWT_SECRET , {expiresIn:"7d"}) // the token will expire in 7 days

      res.status(200).json({...others,accessToken})
    } catch (error) {
     res.status(500).json(error);
    }
  });
module.exports = router;

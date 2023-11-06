const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleWares");

const router = express.Router();

router.route("/").post(registerUser).get(protect, getAllUsers); // OR we can write router.post("/",registerUser);

router.post("/login", loginUser);

// router.get("/",getAllUsers); //To get all the users

module.exports = router;

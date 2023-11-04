const express = require("express");
const { registerUser, loginUser } = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser); // OR we can write router.post("/",registerUser);

router.post("/login", loginUser);

module.exports = router;

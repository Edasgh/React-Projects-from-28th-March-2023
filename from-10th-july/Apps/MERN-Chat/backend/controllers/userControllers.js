const asyncHandler = require("express-async-handler");
//express-async-handler (package from express) is used to handle asynchronous errors

const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

//function to register the user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  // get name, email, password, picture from the frontend body

  if (!name || !email || !password) {
    // throw error if name or email or password is blank || (no need cause we are already handling this in frontend)
    res.status(400);

    throw new Error("Please enter all the fields");
  }

  const userExists = await User.findOne({ email });
  // check if a user with that email already exists (find in database [User model]) || returns boolean value (true or false)

  if (userExists) {
    // if the user already exists, throw an error
    res.status(400);
    throw new Error("User already exists!");
  }

  //create an user object in User model
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    // if the user is created successfully send a response object to the backend
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      //generate a token for the user to keep him/her logged in
      token: generateToken(user._id),
    });
  } else {
    // if the user creation is failed, throw an error
    res.status(400);
    throw new Error("Failed to create user");
  }
});

//function to login the user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // get the email and password from the frontend body

  const user = await User.findOne({ email });
  //find an user with the email

  if (user && (await user.matchPassword(password))) {
    // if an user is found, send the response object to backend
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      //generate a token for the user to keep him/her logged in
      token: generateToken(user._id),
    });
  } else {
    // if an user with these credentials is not found or if the email or password isn't correct, throw an error
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

// /api/user?search=eshita
// this function can be used to search a single user too
const getAllUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  // const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  const users = await User.find(keyword);
  res.send(users);
});

module.exports = { registerUser, loginUser, getAllUsers };

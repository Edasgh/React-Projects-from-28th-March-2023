const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();

//User only methods
//CREATE A Cart
router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(201).json({ savedCart });
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE THE Cart : PUT METHOD
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        // take everything from req.body and update
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE THE Cart => DELETE METHOD

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart deleted successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET user cart

router.get("/:id", verifyTokenAndAuthorization,async (req, res) => {
  try {
    const cart = await Cart.findOne({id:req.params.id});
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL Carts : Admins only

router.get("/", verifyTokenAndAdmin,async (req, res) => {
  try {
    const carts = await Cart.find();
  
    // view all carts
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;

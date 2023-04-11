import React, { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/600195/pexels-photo-600195.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
            <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="" />
          </div>
        </div>
        <div className="right">
          <h1 className="title">Ladies' Sling Bag</h1>
          <div className="prices">
            <h2 className="oldPrice">$19</h2>
            <h2 className="price">$12</h2>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            fugit magnam deleniti repellat quis. Consequuntur assumenda quis
            odio sequi natus ea temporibus omnis a, aliquam sed soluta alias
            eaque quos quaerat, exercitationem qui quibusdam, voluptas sunt
            officiis rerum minus. Facilis vitae sapiente molestias? Illo error
            soluta amet?
          </p>
          <div className="quantity">
            <button
              className="minus"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="plus"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
            {/* prev is the element or parameter of the setQuantity here */}
          </div>
          <button className="add">
            <AddShoppingCartOutlinedIcon /> ADD TO CART
          </button>
          <div className="two-buttons">
            <span className="wishlist">
              <FavoriteBorderOutlinedIcon className="outlinedHeart" />
              <FavoriteIcon className="filledHeart" />
              ADD TO WISHLIST
            </span>
            <span className="compare">
              <span className="balanceIcon">
                <BalanceOutlinedIcon />
              </span>
              ADD TO COMPARE
            </span>
          </div>
          <div className="info">
            <span>Vendor : CHANEL</span>
            <span>Product Type : Sling Bag</span>
            <span>Tag : Sling Bag , Women , Purse</span>
          </div>
          <hr />
          <div className="details">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

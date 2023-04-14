import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/IN.jpg" alt="flag-India" />
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            ESHITA'S ONLINE STORE
          </Link>
        </div>
        <div className="right">
          <Link className="link" to="/">
            HomePage
          </Link>
          <Link className="link">About</Link>
          <Link className="link">Contact</Link>
          <Link className="link">Stores</Link>
          <div className="icons">
            <SearchOutlinedIcon />
            <span className="person">
              <PersonOutlineOutlinedIcon className="outlinedPerson" />
              <PersonIcon className="filledPerson" />
            </span>
            <span className="hearts">
              <FavoriteBorderOutlinedIcon className="outlinedHeart" />
              <FavoriteIcon className="filledHeart" />
            </span>

            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <span className="iconSpan">
                <ShoppingCartOutlinedIcon className="outlinedIcon" />
                <ShoppingCartIcon className="filledIcon" />
                <span className="cartProductAmount">{products.length}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;

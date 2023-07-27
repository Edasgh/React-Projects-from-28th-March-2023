import React, { useState } from "react";
import {
  SearchOutlinedIcon,
  ShoppingCartIcon,
  ShoppingCartOutlinedIcon,
  FavoriteBorderOutlinedIcon,
  FavoriteIcon,
  PersonIcon,
  PersonOutlineOutlinedIcon,
  ArrowForwardIosIcon,
  AddIcon
} from "../../assets/icons/imports";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import logoImg from "../../assets/images/logo.png";
// import Cart from "../Cart/Cart";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  // const products = useSelector((state) => state.cart.products);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={logoImg} alt="logo" />
          </div>

          <div className="item">
            <button className="link" onClick={()=>{navigate(`/products/${process.env.WOMEN_COLL_ID}`);window.location.reload()}}>
              Women
            </button>
          </div>
          <div className="item">
            <button className="link" onClick={()=>{navigate(`/products/${process.env.MEN_COLL_ID}`); window.location.reload()}}>
              Men
            </button>
          </div>
          <div className="item">
            <button className="link" onClick={()=>{navigate(`/products/${process.env.KIDS_COLL_ID}`);window.location.reload()}}>
             Kids
            </button>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
           Ecom
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
              <div className="profile-dropdown" >
                <Link to="/login" >Login  <ArrowForwardIosIcon/> </Link>
                <Link to="/signup" >SignUp <ArrowForwardIosIcon/> </Link>
                <Link  to="/profile" >View Profile <ArrowForwardIosIcon/> </Link>
                <Link to="/sell"> <button>Sell <AddIcon/> </button></Link>
              </div>
              
            </span>
            <span className="hearts">
              <FavoriteBorderOutlinedIcon className="outlinedHeart" />
              <FavoriteIcon className="filledHeart" />
            </span>

            {/* <div className="cartIcon" onClick={() => setOpen(!open)}> */}
            <div className="cartIcon">
              <span className="iconSpan">
                <ShoppingCartOutlinedIcon className="outlinedIcon" />
                <ShoppingCartIcon className="filledIcon" />
                <span className="cartProductAmount">0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;

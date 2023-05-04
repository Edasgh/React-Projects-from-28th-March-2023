import React from "react";
import {Link }from "react-router-dom"
import foodyImg from "../assets/images/foody.png"
import cartIcon from "../assets/icons/cart.svg";
const Header = () => {
  return (
    <div
      className="FO__header bg-black text-white w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
      id="header"
    >
      <div className="FO__header-logo_div pl-1  flex  items-center">
        <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
        <img  src={foodyImg } alt="logo"className="w-full h-40 object-cover"  />
        </Link>
      </div>
      <nav className="FO__header-navbar">
        <ul className="flex  items-center justify-between space-x-10">
          <li>
            <Link to="/" className="text-xl">Home</Link>
          </li>
          <li>
            <a href="#about" className="text-xl" >About</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between space-x-4 ">
      <Link to="/cart"><img src={cartIcon} alt="cart" /></Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Sign Up</Link>
      <p className="px-3"></p>
      </div>
    </div>
  );
};

export default Header;

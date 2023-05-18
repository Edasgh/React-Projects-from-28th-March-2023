import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import "./Header.scss";

const Header = () => {

  const handleNavigation =()=>{
    
  }

  const handleAccount=()=>{
   document.querySelector(".account-dropdown").classList.toggle("active");
  }
  
  const handleCategory=()=>{
    document.querySelector(".categories-list").classList.toggle("active");
  }

  return (
    <header>
      <nav className="navbar">
        <h1 className="logo">myStore</h1>
        <div className="searchBar">
          <input
            type="text"
            name="search"
            placeholder="Search for products, brands and more"
            id="search"
          />
          <button className="searchBtn">
            <SearchIcon />
          </button>
        </div>
        <ul type="none" className="first-list">
          <li  onClick={handleCategory} title="Explore All the Categories">All <ExpandCircleDownIcon/></li>
          <li onClick={handleAccount}>
            <AccountCircleIcon /> Account
          </li>
          <li>
            <a href="/cart">
            Cart <ShoppingCartIcon />
            </a>
          </li>
        </ul>
      </nav>
      <div className="account-dropdown active">
        <button><a href="/register">Sign In</a></button>
        <p>
          Already a user? <a href="/login">Login to your account</a>
        </p>
        <div className="account-list">
          <ul type="none">
          <li><a href="/dashboard">Your Account</a></li>
            <li><a href="/orders">Your Orders</a></li>
            <li><a href="/wishlists">Your Wishlists</a></li>
            <li><a href="/subs">Your MemberShips & Subscriptions</a></li>
          </ul>
        </div>
      </div>

      <div className="categories-list active">
        <ul type="none">
          <li><a href="/men">Men</a></li>
          <hr />
          <li><a href="/women">Women</a></li>
          <hr />
          <li><a href="/kids">Kids</a></li>
          <hr />
          <li><a href="/groceries">Groceries</a></li>
          <hr />
          <li><a href="/electronics">Electronics</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

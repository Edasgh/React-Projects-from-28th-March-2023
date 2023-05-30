import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src="./marketplace-logo.png" alt="marketplace" />
        <ul id="first-ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>Profile</li>

          <li>
            <a href="/">+ Sell</a>
          </li>
        </ul>
      </nav>
      <div className="profile-list">
        <li>
          <a href="/profile">View Profile</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Register</a>
        </li>
      </div>
      
    </>
  );
};

export default Navbar;

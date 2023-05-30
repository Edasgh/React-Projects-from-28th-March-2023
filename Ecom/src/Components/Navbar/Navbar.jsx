import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="left">
        <img src={logoImg} alt="logo" />

        <Link to="/">Women</Link>

        <Link to="/">Men</Link>
      </ul>
      <Link to="/">
        <h2>Ecom</h2>
      </Link>
      <ul className="right">
        <Link to="/">HomePage</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Stores</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="item">
            <h3>Category</h3>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h3>Links</h3>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h3>About</h3>
            <span className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              odit. Libero iste rerum labore alias quibusdam quos ea atque animi
              ipsum fuga architecto tenetur doloremque magnam, dicta accusamus
              pl.
            </span>
          </div>
          <div className="item">
            <h3>Contact</h3>
            <span className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              odit. Libero iste rerum labore alias quibusdam quos ea atque animi
              ipsum fuga architecto tenetur doloremque magnam, dicta accusamus
              pl.
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">ESHITA'S ONLINE STORE</span>
            <span className="copyright">&copy; Copyright  2023 Eshita Das</span>
          </div>
          <div className="right">
            <img src="/images/payment1.png" alt="payment-methods" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

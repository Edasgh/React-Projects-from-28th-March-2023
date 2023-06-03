import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import paymentMethodImg from "../../assets/images/payment1.png"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="item">
            <h3>Category</h3>
            <span><Link>Women</Link></span>
            <span><Link>Men</Link></span>
            <span><Link>Shoes</Link></span>
            <span><Link>Accessories</Link></span>
            <span><Link>New Arrivals</Link></span>
          </div>
          <div className="item">
            <h3>Links</h3>
            <span><Link>FAQ</Link></span>
            <span><Link>Pages</Link></span>
            <span><Link>Stores</Link></span>
            <span><Link>Compare</Link></span>
            <span><Link>Cookies</Link></span>
          </div>
          <div className="item">
            <h3>About Us</h3>
            <span className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              odit. Libero iste rerum labore alias quibusdam quos ea atque animi
              ipsum fuga architecto tenetur doloremque magnam, dicta accusamus
              pl.
            </span>
          </div>
          <div className="item">
            <h3>Contact Us</h3>
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
            <span className="logo">Ecom</span>
            <span className="copyright">&copy; Copyright  2023 Ecom</span>
          </div>
          <div className="right">
            <img src={paymentMethodImg} alt="payment-methods" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

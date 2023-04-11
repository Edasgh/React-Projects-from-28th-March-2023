import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your e-mail..."
          />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <FacebookIcon />
          </a>
          <a
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <InstagramIcon />
          </a>
          <a
            href="http://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <TwitterIcon />
          </a>
          <a
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <GoogleIcon />
          </a>
          <a
            href="http://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <PinterestIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

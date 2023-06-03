import React from "react";
import "./Contact.scss";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GoogleIcon,
  PinterestIcon,
} from "../../assets/icons/imports";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <form className="mail" action="mailTo:admin_newsletter@mail.com">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your e-mail..."
          />
          <button type="submit">JOIN US</button>
        </form>
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

import React from "react";
import paymentImg from "../../images/payment-method_69e7ec.svg";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="top-container">
          <div className="left-part">
            <h1 className="logo">myStore</h1>
            <p className="list-heading">Mail Us</p>
            <p>myStore Online Private Limited</p>
            <p>
              Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring
              Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
              India
            </p>
            <p className="list-heading">Registered Office Address</p>
            <p>
              myStore Online Private Limited, Buildings Alyssa, Begonia & Clove
              Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
              Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC0698775
              Telephone: 044-456987765
            </p>
          </div>
          <div className="right-part">
            <ul type="none">
              <h3>ABOUT</h3>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>myStore Wholesale</li>
              <li>Corporate Information</li>
            </ul>
            <ul type="none">
              <h3>CONSUMER POLICY</h3>
              <li>Return Policy</li>
              <li>Terms Of Use</li>
              <li>Privaly & Security</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
            </ul>
            <ul type="none">
              <h3>HELP</h3>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
              <li>Report Infringement</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="bottom-container">
          <div className="socials">
            <p title="facebook">
              <a href="/fb">
                <FacebookIcon />
              </a>
            </p>
            <p title="twitter">
              <a href="tw">
                <TwitterIcon />
              </a>
            </p>
            <p title="instagram">
              <a href="ig">
                <InstagramIcon />
              </a>
            </p>
            <p title="youtube">
              <a href="/yt">
                <YouTubeIcon />
              </a>
            </p>
          </div>
          <p className="copyright-text">
            Copyright&copy; 2022-2023 myStore.com
          </p>
          <img
            src={paymentImg}
            alt="payment-methods"
            title="payment-methods"
            className="payment-methods"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;

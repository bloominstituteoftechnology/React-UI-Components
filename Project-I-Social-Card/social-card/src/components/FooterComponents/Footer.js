import React from "react";
import "./Footer.css";
import { FiMessageCircle, FiHeart, FiMail, FiRefreshCw } from "react-icons/fi";

const Footer = props => {
  return (
    <footer>
      <FiMessageCircle />
      <div className="share-container">
        <FiRefreshCw />
        <span className="footer-counter">6</span>
      </div>
      <div className="favorite-container">
        <FiHeart />
        <span className="footer-counter">4</span>
      </div>
      <FiMail />
    </footer>
  );
};

export default Footer;

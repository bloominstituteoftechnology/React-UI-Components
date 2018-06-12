import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <i class="far fa-comment" />
      <i class="fas fa-sync-alt">
        <span>6</span>
      </i>
      <i class="far fa-heart">
        <span>4</span>
      </i>
      <i class="far fa-envelope" />
    </div>
  );
};

export default Footer;

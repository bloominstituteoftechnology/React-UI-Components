import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="social-icons">
      <div className="social-icon-count">
        <i className="far fa-comment" />
      </div>
      <div className="social-icon-count">
        <i className="fas fa-sync" />
        <span className="social-count">6</span>
      </div>
      <div className="social-icon-count">
        <i className="far fa-heart" />
        <span className="social-count">4</span>
      </div>
      <div className="social-icon-count">
        <i className="far fa-envelope" />
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__item">
        <i className="far fa-comment" />
      </span>
      <span className="footer__item">
        <i className="fas fa-retweet" /> <span className="number">6</span>
      </span>
      <span className="footer__item">
        <i className="far fa-heart" /> <span className="number">4</span>
      </span>
      <span className="footer__item">
        <i className="far fa-envelope" />
      </span>
    </div>
  );
};

export default Footer;

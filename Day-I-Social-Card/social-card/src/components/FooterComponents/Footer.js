import React from "react";
import "./Footer.css";

const Footer = props => (
  <div className="footer">
    <div className="icon-section section-margin">
      <div className="icon-section__icon">
        <i className="far fa-comment" />
      </div>
      <div className="icon-section__icon">
        <i className="fas fa-sync-alt" />
        <span className="icon-section__number">6</span>
      </div>
      <div className="icon-section__icon">
        <i className="far fa-heart" />
        <span className="icon-section__number">4</span>
      </div>
      <div className="icon-section__icon">
        <i className="far fa-envelope" />
      </div>
    </div>
  </div>
);

export default Footer;

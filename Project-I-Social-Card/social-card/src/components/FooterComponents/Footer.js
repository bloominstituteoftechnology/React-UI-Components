import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="icon comment">
      <i class="far fa-comment fa-lg" />
    </div>
    <div className="icon sync">
      <i class="fas fa-sync-alt fa-spin fa-lg" />
      <span> 6</span>
    </div>
    <div className="icon heart">
      <i class="far fa-heart fa-lg" />
      <span> 4</span>
    </div>
    <div className="icon mail">
      <i class="far fa-envelope fa-lg" />
    </div>
  </div>
);

export default Footer;

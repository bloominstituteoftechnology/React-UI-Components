import React from "react";
import "./Footer.css";

const FooterContainer = () => {
  return (
    <div className="footer-container">
      <i className="fa fa-comment-o" aria-hidden="true" />
      <i className="fa fa-retweet" aria-hidden="true">
        <span>6</span>
      </i>
      <i className="fa fa-heart-o" aria-hidden="true">
        <span>4</span>
      </i>
      <i className="fa fa-envelope-o" aria-hidden="true" />
    </div>
  );
};

export default FooterContainer;

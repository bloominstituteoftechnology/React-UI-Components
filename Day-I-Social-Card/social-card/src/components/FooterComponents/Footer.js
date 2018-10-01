import React from "react";
import "./Footer.css";

const FooterContainer = () => {
  return (
    <div className="footer-container">
      <i className="fa fa-comment-o" aria-hidden="true" />
      <i className="fa fa-retweet" aria-hidden="true">
        6
      </i>
      <i className="fa fa-heart-o" aria-hidden="true">
        4
      </i>
      <i className="fa fa-envelope-o" aria-hidden="true" />
    </div>
  );
};

export default FooterContainer;

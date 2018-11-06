import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer-container">
      <i id="comment" class="far fa-comment" />
      <i id="retweet" class="fas fa-retweet">
        6
      </i>

      <i id="heart" class="far fa-heart">
        4
      </i>
      <i id="envelope" class="far fa-envelope" />
    </div>
  );
};

export default Footer;

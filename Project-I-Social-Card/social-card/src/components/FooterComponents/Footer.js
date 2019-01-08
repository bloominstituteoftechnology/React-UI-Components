import React from "react";
import "./Footer.css";
import Comment from "./Icons/Comment.png";
import Share from "./Icons/Share.png";
import Love from "./Icons/Love.png";
import Send from "./Icons/Send.png";

const Footer = () => {
  return (
    <div className="footer-icons">
      <img src={Comment} alt="comment" />
      <img src={Share} alt="share" />
      <img src={Love} alt="love" />
      <img src={Send} alt="send" />
    </div>
  );
};

export default Footer;

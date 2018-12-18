import React from "react";
import "./Footer.css";
import commentIcon from "./comment-regular.svg";
import heartIcon from "./heart-regular.svg";
import email from "./envelope-regular.svg";
import sync from "./sync-solid.svg";


const Footer = () => {
  return (
    <div className="footer">
      <div >
        <img src={commentIcon} alt="" />
      </div>
      <div className="share">
        <img src={sync} alt="" />
        <p className="share-num">6</p>
      </div>
      <div className="like">
        <img src={heartIcon} alt="" />
        <p className="like-num">4</p>
      </div>
      <div >
        <img src={email} alt="" />
      </div>
    </div>
  );
};

export default Footer;

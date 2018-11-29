import React from "react";
import "./Footer.css";

const FooterContent = props => {
  return (
    <div className="footer-container">
      <i className="material-icons chat-bubble">chat_bubble_outline</i>
      <i className="material-icons retweet">autorenew</i>
      <i className="material-icons like">favorite_border</i>
      <i className="material-icons mail">mail_outline</i>
    </div>
  );
};

const chatBubble = document.querySelector(".chat-bubble");
const reTweet = document.querySelector(".retweet");
const Like = document.querySelector(".like");
const Mail = document.querySelector(".mail");

export default FooterContent;

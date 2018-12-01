import React from "react";
import "./Footer.css";
import ChatClick from "./ChatClick";
import MailClick from "./MailClick";
import TweetClick from "./TweetClick";
import LikeClick from "./LikeClick";

const FooterContent = props => {

  return (
    <div className="footer-container">
      <ChatClick />
      <TweetClick />
      <LikeClick />
      <MailClick />
    </div>
  );
};

export default FooterContent;

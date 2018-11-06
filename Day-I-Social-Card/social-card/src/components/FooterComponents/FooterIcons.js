import React from "react";
import "./Footer.css";

function FooterIcons(props) {
  return (
    <div className="FooterIcons">
      <a href={props.messageLink} className="messageBtn icon">
        <i className="fa fa-comments" />
        <span className="messageBtnAfter" />
      </a>
      <a href={props.shareLink} className="shareBtn icon">
        <i className="fas fa-retweet" />
        <span className="shareBtnAfter" />
      </a>
      <a href={props.likeLink} className="likeBtn icon">
        <i className="far fa-heart" />
        <span className="likeBtnAfter" />
      </a>
      <a href={props.email} className="emailBtn icon">
        <i className="far fa-envelope" />
        <span className="emailBtnAfter" />
      </a>
    </div>
  );
}

export default FooterIcons;

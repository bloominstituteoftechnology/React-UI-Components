import React from "react";
import commentIcon from "../../images/comment-icon.svg";
import shareIcon from "../../images/share-icon.svg";
import heartIcon from "../../images/heart-icon.svg";
import envelopeIcon from "../../images/envelope-icon.svg";
import "./Footer.css";

const Footer = props => {
  return (
    <div className="footer__container">
      <div className="comment__icon icon">
        <img src={commentIcon} alt="Comment icon" />
      </div>
      <div
        onClick={props.shareClicked}
        name="share"
        className="share__icon icon"
      >
        <img src={shareIcon} alt="Share icon" />
      </div>
      <p className="share__count">{props.shareCount}</p>
      <div onClick={props.likeClicked} name="like" className="heart__icon icon">
        <img src={heartIcon} alt="Heart icon" />
      </div>
      <p className="like__count">{props.likeCount}</p>
      <div className="envelope__icon icon">
        <img src={envelopeIcon} alt="Envelope icon" />
      </div>
    </div>
  );
};

export default Footer;

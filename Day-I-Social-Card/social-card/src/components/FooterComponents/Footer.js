import React from 'react';
import './Footer.css';

const Footer = props => {
  return (
    <div className="footer-container">
      <img className="reply" src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Chat_bubble-512.png" alt="reply-icon" />
      <img className="retweet" src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-78-512.png" alt="retweet-icon" />
      <img className="like" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-512.png" alt="like-icon" />
      <img className="message" src="https://cdn3.iconfinder.com/data/icons/lexter-flat-outline-apps/45/envelope_outline-512.png" alt="message-icon" />
    </div>
  );
};

export default Footer;

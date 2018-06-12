import React from 'react';
import './Footer.css';

const FooterContainer = () => {
  return(
    <div className="footer">
      <button className="footer-button-reply">
        <div className="footer-button-container">
          <img className="footer-button-reply__img" src="images/icon-reply.png" alt="Reply" />
        </div>
      </button>
      <button className="footer-button-retweet">
        <div className="footer-button-container">
          <img className="footer-button-retweet__img" src="images/icon-retweet.png" alt="Retweet" />
          6
        </div>
      </button>
      <button className="footer-button-like">
        <div className="footer-button-container">
          <img className="footer-button-like__img" src="images/icon-like.png" alt="Like" />
          4
        </div>
      </button>
      <button className="footer-button-send">
        <div className="footer-button-container">
          <img className="footer-button-send__img" src="images/icon-send.png" alt="Send mail" />
        </div>
      </button>
    </div>
  );
};

export default FooterContainer;
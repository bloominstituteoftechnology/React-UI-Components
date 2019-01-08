import React from 'react';
import './Footer.css';

const Footer = (props) => {

    let replyClickHandler = () => alert("Reply!");
    let retweetClickHandler = () => alert("Retweet!");
    let heartClickHandler = () => alert("Heart!");
    let shareClickHandler = () => alert("Share!");

    return (
      <div className="footer-container">
        <div><img src={window.location.origin + '/img/speech.svg'} alt="" onClick={replyClickHandler} /></div>
        <div><img src={window.location.origin + '/img/retweet.svg'} alt="" onClick={retweetClickHandler} /><p>6</p></div>
        <div><img src={window.location.origin + '/img/heart.svg'} alt="" onClick={heartClickHandler} /><p>4</p></div>
        <div><img src={window.location.origin + '/img/email.svg'} alt="" onClick={shareClickHandler} /></div>
      </div>
    )
  }

export default Footer;
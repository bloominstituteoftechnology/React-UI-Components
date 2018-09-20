import React from 'react';
import './Footer.css';

export const Footer = (props) => {
    return (
      <div className="footer-container">
        <div><img src={window.location.origin + '/img/speech.svg'} alt=""/></div>
        <div><img src={window.location.origin + '/img/retweet.svg'} alt="" /><p>6</p></div>
        <div><img src={window.location.origin + '/img/heart.svg'} alt="" /><p>4</p></div>
        <div><img src={window.location.origin + '/img/email.svg'} alt="" /></div>
      </div>
    )
  }

export default Footer;
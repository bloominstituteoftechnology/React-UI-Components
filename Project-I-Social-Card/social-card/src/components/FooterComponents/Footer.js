import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="icons-container">
        <div className="icon-box">
        <ion-icon name="chatbubbles"></ion-icon>
        <label>
        <ion-icon name="sync"></ion-icon> 6 
        </label> 
        <label>
        <ion-icon name="heart-empty"></ion-icon> 4
        </label>
        <ion-icon name="mail"></ion-icon>
      </div>
    </div>
  );
};

export default Footer;
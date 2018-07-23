import React from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';
import speechBubble from './assets/speech-bubble.svg';
import refresh from './assets/refresh.svg';
import heart from './assets/heart.svg';
import mail from './assets/mail.svg';

const Footer = () => (
  <div className="footer">
    <FooterIcon iconImg={speechBubble}/>
    <FooterIcon iconImg={refresh} count="6"/>
    <FooterIcon iconImg={heart} count="4"/>
    <FooterIcon iconImg={mail}/>
  </div>
);

export default Footer;
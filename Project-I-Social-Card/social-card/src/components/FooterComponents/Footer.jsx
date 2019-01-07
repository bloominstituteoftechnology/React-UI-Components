import React from 'react';
import './Footer.css';

import comment from './comment.png';
import circle from './circle.png';
import heart from './heart.png';
import mail from './mail.png';

// prettier-ignore
const Footer = (props) => {
  return (
    <div className="footer-container">
      <img src={comment} alt=""/>
      <img src={circle} alt=""/><span className="number">6</span>
      <img src={heart} alt=""/><span className="number">4</span>
      <img src={mail} alt=""/>
    </div>
  )
}

export default Footer;

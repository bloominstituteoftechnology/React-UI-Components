import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className="footer-container">
      <i className="far fa-comment"></i>
      <i className="fas fa-retweet icon"><span className="number">6</span></i>
      <i className="far fa-heart icon"><span className="number">4</span></i>
      <i className="far fa-envelope icon"></i>
    </div>
  )
}

export default Footer;
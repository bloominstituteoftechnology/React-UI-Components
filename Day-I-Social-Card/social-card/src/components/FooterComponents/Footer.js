import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <i className="fa fa-comment-o fa-2x" aria-hidden="true"></i>
      <i className="fa fa-retweet fa-2x" aria-hidden="true"><span>6</span></i>
      <i className="fa fa-heart-o fa-2x" aria-hidden="true"><span>4</span></i>
      <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
    </div>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  let retweets = 6;
  let likes = 4;
  const plusretweet = e => e.target.textContent = ` ${retweets++}`;
  const pluslike = e => e.target.textContent = ` ${likes++}`;
  return (
    <div className="footer-container">
      <i className="far fa-comment"></i>
      <i className="fas fa-retweet" onClick={plusretweet}> 6</i>
      <i className="far fa-heart" onClick={pluslike}> 4</i>
      <i className="far fa-envelope"></i>
    </div>
  )
};

export default Footer;

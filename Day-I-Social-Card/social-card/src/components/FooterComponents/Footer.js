import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = props => {
  return (
    <div className="footer-content">
      <FontAwesomeIcon icon="comment" size="2x" />
      <FontAwesomeIcon icon="retweet" size="2x" />
      <FontAwesomeIcon icon="heart" size="2x" />
      <FontAwesomeIcon icon="envelope" size="2x" />
    </div>
  );
};

export default Footer;

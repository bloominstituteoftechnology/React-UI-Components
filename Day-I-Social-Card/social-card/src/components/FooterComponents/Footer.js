import React from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';

const Footer = props => {
  return (
    <footer className="Footer">
      <FooterIcon icon="far fa-comment" />
      <FooterIcon icon="fas fa-retweet" number={4} />
      <FooterIcon icon="far fa-heart" number={6} />
      <FooterIcon icon="far fa-envelope" />
    </footer>
  );
};

export default Footer;

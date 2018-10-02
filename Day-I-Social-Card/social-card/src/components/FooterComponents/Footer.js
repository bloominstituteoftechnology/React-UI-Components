import React from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';

const Footer = props => {
  return (
    <footer className="Footer">
      <FooterIcon icon="far fa-comment" />
      <FooterIcon
        handleFooterClick={props.handleFooterClick}
        icon="fas fa-retweet"
        number={props.retweets}
      />
      <FooterIcon
        handleFooterClick={props.handleFooterClick}
        icon="far fa-heart"
        number={props.favorites}
      />
      <FooterIcon icon="far fa-envelope" />
    </footer>
  );
};

export default Footer;

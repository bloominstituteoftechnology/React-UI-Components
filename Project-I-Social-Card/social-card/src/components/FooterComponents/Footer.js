import React from 'react';
import './Footer.css';
import ChatIcon from './Chat';
import Repost from './Repost';
import Heart from './Heart';
import Message from './Message';

const Footer = (props) => {
  return (
    <div className="footer-container">
      <ChatIcon />
      <Repost />
      <Heart />
      <Message />
    </div>
  )
}


export default Footer;

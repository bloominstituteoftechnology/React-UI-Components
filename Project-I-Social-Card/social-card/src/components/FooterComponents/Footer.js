import React from 'react';
import './Footer.css';
import ChatIcon from './Chat';
import Repost from './Repost';
import Heart from './Heart';
import Message from './Message';
import StateLess from './stateless_example';

const Footer = (props) => {
  return (
    <div className="footer-container">
      <ChatIcon />
      <Repost />
      <Heart />
      <Message />
      <StateLess />
    </div>
  )
}


export default Footer;

import React from 'react';

import './Footer.css';

import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <div className="card__footer">
      <SocialIcon src="/images/comment.png" alt="Comment" />
      <SocialIcon src="/images/retweet.png" alt="Retweet" />
      <SocialIcon src="/images/heart.png" alt="Heart" />
      <SocialIcon src="/images/message.png" alt="Message" />
    </div>
  );
};

export default Footer;
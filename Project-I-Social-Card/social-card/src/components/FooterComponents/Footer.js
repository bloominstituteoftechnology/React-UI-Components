import React from 'react';

import './Footer.css';

import SocialIcon from './SocialIcon';

const Footer = props => {
  return (
    <div className="card__footer">
      <SocialIcon src="/images/comment.png" alt="Comment" action={props.comment} />
      <SocialIcon src="/images/retweet.png" alt="Retweet" action={props.retweet} />
      <SocialIcon src={props.hasHearted ? "/images/hearted.png" : "/images/heart.png"} alt="Heart" action={props.heart} hasHearted={props.hasHearted} />
      <SocialIcon src="/images/message.png" alt="Message" action={props.message} />
    </div>
  );
};

export default Footer;
import React from 'react';
import './Footer.css';

import comment from '../../img/icon-comment.PNG';
import like from '../../img/icon-like.PNG';
import mail from '../../img/icon-mail.PNG';
import share from '../../img/icon-share.PNG';

const Footer = props => {
  return (
    <footer>
      <div className = 'icons'>
        <img src={comment} alt="comment icon" />
        <img src={like} alt="like icon" />
        <img src={share} alt="share icon" />
        <img src={mail} alt="mail icon" />
      </div>
    </footer>
  );
}

export default Footer;

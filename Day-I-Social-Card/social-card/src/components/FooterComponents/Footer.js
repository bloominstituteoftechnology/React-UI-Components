import React from 'react';
import './Footer.css';

import comment from '../../img/icon-comment.PNG';
import commentOn from '../../img/icon-comment-clicked.png';
import like from '../../img/icon-like.PNG';
import mail from '../../img/icon-mail.PNG';
import share from '../../img/icon-share.PNG';

const Footer = props => {
  let commentCount = 0;

  function react(event) {

    if(event.target.src.includes('png')) {
      event.target.src = comment;
    } else {
      event.target.src = commentOn;
    }

  }

  return (
    <footer>
      <div className = 'icons'>
        <img src={comment} alt="comment icon" onClick={react}/>
        <img src={like} alt="like icon" />
        <img src={share} alt="share icon" />
        <img src={mail} alt="mail icon" />
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import './Footer.css';
import commentIcon from './icons/speech-bubble.png';
import refresh from './icons/refresh-icon.png';

function Footer() {
  return (
    <div className='footerContainer'>
      <img className='comment' src= {commentIcon} alt= 'comment-bubble' />
      <img className= 'refresh' src= {refresh} alt= 'reload-icon'/>
      
    </div>
  )
}

export default Footer;
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footerContainer'>
      <img className='comment' src= './icons/speech-bubble.png' alt= 'comment-bubble' />
      <img className= 'refresh' src='./icons/refresh-icon.png' alt='reload icon' />
      
    </div>
  )
}

export default Footer;
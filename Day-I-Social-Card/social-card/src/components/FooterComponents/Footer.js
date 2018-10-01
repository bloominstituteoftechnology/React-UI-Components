import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className='footer-container'>
      <i className='far fa-comment'></i>
      <div className='icon-group'>
        <i className="fas fa-sync-alt"></i> 6
      </div>
      <div className='icon-group'>
        <i className="far fa-heart"></i> 4
      </div>
      <i className="far fa-envelope"></i>
    </div>
  )
}

export default Footer;

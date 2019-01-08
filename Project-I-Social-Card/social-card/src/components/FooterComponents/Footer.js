import React from 'react';
import envelope from './envelope-light.svg';
import comment from './comment-light.svg';
import heart from './heart-light.svg';
import sync from './sync-light.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <img className='footer-img' src={comment} alt='' />
      <div className='num sync-num'>
        <img className='footer-img' src={sync} alt='' />
        <p>6</p>
      </div>
      <div className='num heart-num'>
        <img className='footer-img' src={heart} alt='' />
        <p>4</p>
      </div>

      <img className='footer-img' src={envelope} alt='' />
    </div>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='comment'><i class="far fa-comment"></i></div>
      <div className='retweet'><i class="fas fa-retweet"></i></div>
      <div className='like'><i class="far fa-heart"></i></div>
      <div className='dm'><i class="far fa-envelope"></i></div>
    </footer>
  );
}

export default Footer;
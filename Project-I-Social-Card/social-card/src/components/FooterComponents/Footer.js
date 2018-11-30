import React from 'react';
import './Footer.css';
import {FiMessageCircle, FiHeart, FiMail, FiRefreshCw} from 'react-icons/fi';

const Footer = props => {

  return (
    <footer>
      <FiMessageCircle />
      <div class="share-container">
      <FiRefreshCw />
      <span class="footer-counter">6</span>
      </div>
      <div class="favorite-container">
      <FiHeart />
      <span class="footer-counter">4</span>
      </div>
      <FiMail />
    </footer>

  )
}


export default Footer;

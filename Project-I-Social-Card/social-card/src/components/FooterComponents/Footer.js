import React from 'react';
import './Footer.css';


const Footer = () =>{
  return (
    <div className = "footer-container">
      <div class = "footer-group"><i class="far fa-comment"></i><span></span></div>

      <div class = "footer-group"><i class="fas fa-retweet"></i><span>6</span></div>

      <div class = "footer-group"><i class="far fa-heart"></i><span>4</span></div>

      <div class = "footer-group"><i class="far fa-envelope"></i><span></span></div>

    </div>

  );
}



export default Footer;

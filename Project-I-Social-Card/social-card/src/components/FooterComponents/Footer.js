import React from 'react';
import './Footer.css';


const Footer = () =>{
  return (
    <div className = "footer-container">
      <div className = "footer">
      <span className="far fa-comment"></span>
      </div>

      <div className = "footer">
      <span className="fas fa-retweet"></span>6
      </div>

      <div className = "footer">
      <span className="far fa-heart"></span>4
      </div>

      <div className = "footer">
      <span className="far fa-envelope"></span>
      </div>

    </div>

  );
}



export default Footer;

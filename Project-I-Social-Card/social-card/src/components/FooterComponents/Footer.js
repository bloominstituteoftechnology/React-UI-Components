import React from "react";
import './Footer.css';

function Footer () {

  return(
    <div className="footer-container">
      <div>
       <i className="far fa-comment"></i>
      </div>

      <div>
       <i className="fas fa-retweet"></i>
       <p>6</p>
      </div>

      <div>
       <i className="fas fa-heart"></i>
       <p>4</p>
      </div>

      <div>
        <i className="fas fa-envelope"></i>
      </div>
    </div>
  )
}

export default Footer;

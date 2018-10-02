import React from 'react';
import './Footer.css';


const FooterStuff = () => {
    return (
        <div className='footer-container'>
           <a href="https://twitter.com/"> 
            <i className="far fa-comment"></i>
            <i className="far fa-retweet">22</i>
            <i className="fas fa-heart">41</i>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
    );
}

export default FooterStuff;
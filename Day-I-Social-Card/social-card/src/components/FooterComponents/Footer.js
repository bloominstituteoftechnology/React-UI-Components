import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faHeart);



const Footer = () => {

    let heartCount = 0;
  const incHeartCount = () => {
    heartCount += 1;
  }
    return (
        <footer>
            <div className="heart-div" >
        
        <i className="fas fa-heart heart" onClick={(e)=> incHeartCount}></i>
        <p className="heart-count">{heartCount}</p>
        </div>
        </footer>
    );
}

export default Footer;
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Footer = () => {
   return(
   <div className="footer">
        <FontAwesomeIcon icon="comment" />
        <FontAwesomeIcon icon="recycle" />
        <FontAwesomeIcon icon="heart" />
        <FontAwesomeIcon icon="envelope" />
    </div>
   )
}

export default Footer;
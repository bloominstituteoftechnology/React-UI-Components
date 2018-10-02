import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Footer = () => {
    const eventOne = (e) => {
        e.target.classList.toggle('red');
    }

 
   return(
    <div className="footer">
        <FontAwesomeIcon icon="comment" onClick={eventOne}  />
        <FontAwesomeIcon icon="circle-notch" onClick={eventOne}  />
        <FontAwesomeIcon icon="heart" onClick={eventOne}  />
        <FontAwesomeIcon icon="envelope" onClick={eventOne}  />
    </div>
   )
}

export default Footer;
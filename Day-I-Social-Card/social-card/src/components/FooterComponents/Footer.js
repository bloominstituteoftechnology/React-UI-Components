import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
   return(
   <div className="footer">
        <button className="button1"><FontAwesomeIcon icon="comment-o" /></button>
        <button className="button2"><FontAwesomeIcon icon="refresh" /></button>
        <button className="button3"><FontAwesomeIcon icon="heart-o" /></button>
        <button className="button4"><FontAwesomeIcon icon="fa fa-envelope-o" /></button>
    </div>
   )
}

export default Footer;
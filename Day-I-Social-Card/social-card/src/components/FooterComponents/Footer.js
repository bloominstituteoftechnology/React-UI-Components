import React from 'react';
import './Footer.css';
import '/Users/ryanboris/Documents/Projects/Lambda/week-six/React-UI-Components/Day-I-Social-Card/social-card/node_modules/@fortawesome/fontawesome-free/js/all.js';



const Footer = () => {
   return(
   <div className="footer">
        <button className="button1"><i className="fa fa-comment-o"></i></button>
        <button className="button2"><i className="fa fa-refresh"></i></button>
        <button className="button3"><i className="fa fa-heart-o"></i></button>
        <button className="button4"><i className="fa fa-envelope-o"></i></button>
    </div>
   )
}

export default Footer;
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faHeart);



const Footer = (props) => {

    
    return (
        <footer>
            <div className="heart-div" >
            
        <i className="fas fa-heart heart" onClick={props.onClick}></i>
        <p className="heart-count">{props.heartCount}</p>
        </div>
        </footer>
    );
}

export default Footer;
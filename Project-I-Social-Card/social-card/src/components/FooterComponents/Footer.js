import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faShareSquare, faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';


const Footer = () => {
    return(
        <div className="footer-container">
            <ul className="icon-list">
                <li className="icon">
                    <FontAwesomeIcon icon={faComment} />
                </li>
                <li className="icon">
                    <FontAwesomeIcon icon ={faShareSquare} /> 6
                </li>
                <li className="icon">
                    <FontAwesomeIcon icon={faHeart} /> 4
                
                    <FontAwesomeIcon icon={faEnvelope} />
                </li>
            </ul>  
        </div>
    );
}

export default Footer;
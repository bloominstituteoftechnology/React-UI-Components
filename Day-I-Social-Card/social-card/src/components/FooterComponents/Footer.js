import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faSync} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='footer-container'>
            <FontAwesomeIcon icon={faComment}/>
            <FontAwesomeIcon icon={faSync}/>
            <FontAwesomeIcon icon={faHeart}/>
            <FontAwesomeIcon icon={faEnvelope}/>
        </div>
    )
};

export default Footer;
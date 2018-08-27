import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment, faSync, faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons/'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-icon comment"><FontAwesomeIcon icon={faComment} /></div>
            <div className="footer-icon"><FontAwesomeIcon icon={faSync} /> <span className="count">6</span></div>
            <div className="footer-icon"><FontAwesomeIcon icon={faHeart} /> <span className="count">4</span></div>
            <div className="footer-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
        </div>
    )
}
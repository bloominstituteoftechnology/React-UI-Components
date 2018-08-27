import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment, faSync, faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons/'

export default function Footer() {
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faComment} />
            <div><FontAwesomeIcon icon={faSync} /> <span className="count">6</span></div>
            <div><FontAwesomeIcon icon={faHeart} /> <span className="count">4</span></div>
            <FontAwesomeIcon icon={faEnvelope} />
        </div>
    )
}
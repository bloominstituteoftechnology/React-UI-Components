import React from 'react';
import './Footer.css';
import {
FaComment, FaSync, FaHeart, FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
    return (
    <div className="footer">
        <FaComment size="1.8em" onClick=""/> 
        <FaSync size="1.8em" onClick=""/> 
        <FaHeart size="1.8em" onClick=""/> 
        <FaEnvelope size="1.8em" onClick=""/> 
    </div>
    );
} 

export default Footer;
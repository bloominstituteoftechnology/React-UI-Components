import React from 'react';
import './Footer.css';
import {
FaComment, FaSync, FaHeart, FaEnvelope
} from 'react-icons/fa-outline';

const Footer = () => {
    return (
    <React.Fragment>
        <FaComment/> 
        <FaSync/> 
        <FaHeart/> 
        <FaEnvelope/> 
    </React.Fragment>
    );
} 

export default Footer;
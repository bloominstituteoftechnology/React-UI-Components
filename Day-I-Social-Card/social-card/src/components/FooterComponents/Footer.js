import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <div className='footerContainer'>
           <div className='comment'><FontAwesomeIcon icon="comment" /></div>
          <div className='sync'><FontAwesomeIcon icon="sync-alt" /> 6</div>
           <div className='heart'><FontAwesomeIcon icon="heart" /> 4</div>
           <div className='envelope'><FontAwesomeIcon icon="envelope" /></div>
        </div>
    );
};

export default Footer;
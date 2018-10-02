import React from 'react';
import './Footer.css';


const Footer = props =>{
    return(
        <div className='footer-bar'>
            <div className='footer-bar-icons'>
                <i className="far fa-comment footer-bar-icon"></i>
                <span className='footer-bar-icon-spacer'></span>
                <i className="fas fa-sync footer-bar-icon"></i>
                <label className='footer-icon-counter'>6</label>
                <span className='footer-bar-icon-spacer-small'></span>
                <i className="far fa-heart footer-bar-icon"></i>
                <label className='footer-icon-counter'>4</label>
                <span className='footer-bar-icon-spacer-small'></span>
                <i className="far fa-envelope footer-bar-icon"></i>
            </div> 
            <br />               
        </div>
    )
}

export default Footer;
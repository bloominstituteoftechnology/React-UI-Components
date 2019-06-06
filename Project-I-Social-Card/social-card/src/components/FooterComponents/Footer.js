import React from 'react';
import './Footer.css';
import footerLogo from './footerLogos.png'

const Footer = ()=>{
    return(
        <div className="divFooter">
            <img src={footerLogo}/>  
        </div>
    )
}
export default Footer;
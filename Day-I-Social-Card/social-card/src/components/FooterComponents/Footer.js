import React from "react";
import "./Footer.css";
import footerIMG from './footer-img.png'

const Footer = props => {
    return (
        <div className='footer'>
        <img src={footerIMG} alt=''></img>
        </div>
    )
}

export default Footer;
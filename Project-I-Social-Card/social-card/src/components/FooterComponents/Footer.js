import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <div className= "footer">
        <div className = "footer-img">
            <i class="far fa-comment"></i>
            </div>
            <div className = "footer-img">
            <i class="fas fa-retweet"></i>
            </div>   
            <div className = "footer-img">
                <i class="far fa-heart"></i>
            </div> 
            <div className = "footer-img">
            <i class="far fa-envelope"></i>
            </div>  

        </div>
    );

}

export default Footer;
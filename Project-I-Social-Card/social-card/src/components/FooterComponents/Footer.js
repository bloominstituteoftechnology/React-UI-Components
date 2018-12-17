import React from 'react';
import './Footer.css'

function Footer(props){
    return(
        <div className="footer-container">
            <i class="far fa-comment"></i>
            <i class="fas fa-retweet">6</i>
            <i class="far fa-heart">4</i>
            <i class="far fa-envelope"></i>
        </div>
    )
}

export default Footer;
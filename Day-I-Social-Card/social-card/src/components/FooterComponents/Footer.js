import React from 'react';
import './Footer.css';

function Footer(){
    return (
        <footer className="footer">
            <div className="icon-wrapper">
                <div className="icon-container">
                    <i class="fa fa-comment-o"></i>
                    <i class="fa fa-refresh"> 6</i>
                    <i class="fa fa-heart-o"> 4</i>
                    <i class="fa fa-envelope-o"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
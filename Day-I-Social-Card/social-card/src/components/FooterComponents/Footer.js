import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <footer className='footer-container'>
            <div className='icon-box'>
                <div className='icon'>
                <i class="fa fa-comment" aria-hidden="true"></i>
                </div>

                <div className='icon'>
                <i class="fa fa-retweet" aria-hidden="true"></i>
                <p>5</p>
                </div>

                <div className='icon'>
                <i class="fa fa-heart" aria-hidden="true"></i>
                <p>4</p>
                </div>

                <div className='icon'>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
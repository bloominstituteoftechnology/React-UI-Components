
import React from 'react';
import './Footer.css';
import Comment from './comment.png';
import Retweet from './retweet.png';
import Heart from './heart.png';
import Send from './send.png';

function Footer() {
    return (
        <div className="footer-container">
            <a href = "https://www.twitter.com"><img className = "comment" src ={Comment} alt =""></img>
            </a>
            <a href = "https://www.twitter.com"><img className = "retweet" src ={Retweet} alt =""></img>
            </a>
            <a href = "https://www.twitter.com"><img className = "heart" src ={Heart} alt =""></img>
            </a>
            <a href = "https://www.twitter.com"><img className = "send" src ={Send} alt =""></img>
            </a>  
        </div>
    )
}

export default Footer;
import React from 'react';
import './Footer.css';

function Footer() {
    return <div className="allIcons">
                <div className="comment">
                    <img src="https://image.flaticon.com/icons/svg/25/25663.svg" alt="cmnt" />
                </div>
                <div className="retweet">
                    <img src="https://image.flaticon.com/icons/svg/25/25328.svg" alt="rt" />
                </div>
                <div className="like">
                    <img src="https://image.flaticon.com/icons/svg/60/60993.svg" alt="like" />
                </div>
                <div className="share">
                    <img src="https://image.flaticon.com/icons/svg/12/12194.svg" alt="share" />   
                </div>
            </div>
}

export default Footer;
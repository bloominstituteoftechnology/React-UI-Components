import React from 'react';
import './Footer.css';


function Footer() {
    return <div className="allIcons">
                <div className="comment">
                    <img src="https://image.flaticon.com/icons/svg/25/25663.svg" alt="cmnt" />
                </div>
                <div className="retweet">
                    <img onClick={rtAdder} className="rticon" src="https://image.flaticon.com/icons/svg/25/25328.svg" alt="rt" />
                    <p>{retweetCounter}</p>
                </div>
                <div className="like">
                    <img onClick={likeAdder} className="likeicon"src="https://image.flaticon.com/icons/svg/60/60993.svg" alt="like" />
                    <p>{likeCounter}</p>
                </div>
                <div className="share">
                    <img src="https://image.flaticon.com/icons/svg/12/12194.svg" alt="share" />   
                </div>
            </div>
}

// counters for icons

let retweetCounter = 0;
let likeCounter = 0;

function rtAdder() {
    retweetCounter += 1;
}

function likeAdder() {
    likeCounter += 1;
}

export default Footer;
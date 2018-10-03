import React from 'react';
import './Footer.css';
import commentSVG from './comment-regular.svg';
import messageSVG from './envelope-square-solid.svg';
import likeSVG from './heart-solid.svg';
import retweetSVG from './retweet-solid.svg';



const FooterImg = () => {
    let index = 0;

    return (
        <div className = "all-img">
            <img className = "img-size" src = {commentSVG} alt = "comment"/>
            <p className = "retweet-index">{index}</p>
            <img className = "img-size index-one-tweet" src = {retweetSVG} alt = "share"/>
            <p className = "like-index">{index}</p>
            <img className = "img-size index-one-like" src = {likeSVG} alt = "like"/>
            <img className = "img-size"  src = {messageSVG} alt = "message"/>
        </div>
        
    );
}

export default FooterImg;



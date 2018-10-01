import React from 'react';
import './Footer.css';
import commentSVG from './comment-regular.svg';
import messageSVG from './envelope-square-solid.svg';
import likeSVG from './heart-solid.svg';
import retweetSVG from './retweet-solid.svg';



const FooterImg = () => {
    return (
        <div className = "all-img">
            <img className = "img-size" src = {commentSVG} alt = "comment"/>
            <img className = "img-size"  src = {retweetSVG} alt = "share"/>
            <img className = "img-size"  src = {likeSVG} alt = "like"/>
            <img className = "img-size"  src = {messageSVG} alt = "message"/>
        </div>
        
    );
}

export default FooterImg;
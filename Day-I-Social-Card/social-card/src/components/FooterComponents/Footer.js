import React from 'react';
import './Footer.css';
import commentIcon from './comment-icon.png';
import retweetIcon from './retweet-icon.png';
import likeIcon from './like-icon.png';
import shareIcon from './share-icon.png';

function Footer(props) {
    return (
        <div className="footer">
            <div className="btn"><img src={commentIcon} /></div>
            <div className="btn"><img src={retweetIcon} /></div>
            <div className="btn"><img src={likeIcon} /></div>
            <div className="btn"><img src={shareIcon} /></div>
        </div>
    )
}

export default Footer;
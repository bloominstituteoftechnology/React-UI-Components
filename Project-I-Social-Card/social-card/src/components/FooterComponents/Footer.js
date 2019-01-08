import React from 'react';
import './Footer.css';

import CommentIcon from '../../assets/comment.png';
import RetweetIcon from '../../assets/retweet.png';
import LikeIcon from '../../assets/like.png';
import EmailIcon from '../../assets/email.png';

const Footer = props => {
    return (
        <div className="footer">
            <div className='social-action' onClick={props.increaseComments}>
                <img src={CommentIcon}></img>
                <span className='social-number'>{props.commentCount}</span>
            </div>
            <div className='social-action' onClick={props.increaseRetweets}>
                <img src={RetweetIcon}></img>
                <span className='social-number'>{props.retweets}</span>
            </div>
            <div className='social-action' onClick={props.increaseLikes}>
                <img src={LikeIcon}></img>
                <span className='social-number'>{props.likes}</span>
            </div>
            <div className='social-action'>
                <img src={EmailIcon}></img>
            </div>
        </div>
    );
}

export default Footer;
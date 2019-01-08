import React from 'react';
import './Footer.css';

const Footer = props => {
    return (
        <div className="footer">
            <div className='social-action' onClick={props.increaseComments}>
                <i className="far fa-comment"></i>
                <span className='social-number'>{props.commentCount}</span>
            </div>
            <div className='social-action' onClick={props.increaseRetweets}>
                <i className="fas fa-retweet"></i>
                <span className='social-number'>{props.retweets}</span>
            </div>
            <div className='social-action' onClick={props.increaseLikes}>
                <i className="far fa-heart"></i>
                <span className='social-number'>{props.likes}</span>
            </div>
            <div className='social-action'>
                <i className="far fa-envelope"></i>
            </div>
        </div>
    );
}

export default Footer;
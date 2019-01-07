import React from 'react';
import './Footer.css';

const Footer = props => {
    return (
        <div className="footer">
            <div className='social-action' onClick={props.increaseComments}>
                <i class="far fa-comment"></i>
                <span className='social-number'>{props.comments}</span>
            </div>
            <div className='social-action' onClick={props.increaseRetweets}>
                <i class="fas fa-retweet"></i>
                <span className='social-number'>{props.retweets}</span>
            </div>
            <div className='social-action' onClick={props.increaseLikes}>
                <i class="far fa-heart"></i>
                <span className='social-number'>{props.likes}</span>
            </div>
            <div className='social-action'>
                <i class="far fa-envelope"></i>
            </div>
        </div>
    );
}

export default Footer;
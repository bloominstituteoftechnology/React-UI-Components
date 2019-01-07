import React from 'react';
import './Footer.css';

const Footer = props => {
    return (
        <footer className='footer'>
            <i className="far fa-comment"></i>
            <i className="fas fa-retweet" onClick={props.handleRetweet}> {props.retweets}</i>
            <i className="far fa-heart" onClick={props.handleLike}> {props.likes}</i>
            <i className="far fa-envelope"></i>
        </footer>
    )
}

export default Footer;
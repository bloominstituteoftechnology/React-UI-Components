import React from 'react';
import './Footer.css';

const Footer = (props) => (
    <div className="Footer">
        <div className="social-button hover-blue">
            <i className="far fa-comment"></i>
        </div>
        <div className="social-button hover-green" onClick={props.retweet}>
            <i className="fas fa-sync"></i>  {props.retweets}
        </div>
        <div className="social-button hover-pink" onClick={props.like}>
            <i className="far fa-heart"></i>  {props.likes}
        </div>
        <div className="social-button hover-orange">
            <i className="far fa-envelope"></i>
        </div>
    </div>
)

export default Footer;
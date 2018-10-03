import React from 'react';
import './Footer.css';

let Footer = () => {

    return (
        <footer>
            <div className="icon">
                <i className="far fa-comment"></i>
                <p className="count"></p>
            </div>
            <div className="icon">
                <i className="fas fa-retweet"></i>
                <p className="count">6</p>
            </div>
            <div className="icon">
                <i className="far fa-heart"></i>
                <p className="count">4</p>
            </div>
            <div className="icon">
                <i className="far fa-envelope"></i>
                <p className="count"></p>
            </div>
        </footer>
    )
}

export default Footer;
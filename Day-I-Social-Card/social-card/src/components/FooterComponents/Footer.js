import React from 'react';
import './Footer.css';

const Footer = (props)   =>  {
    return(
        <div className="footer">
            <div>
                <i className="far fa-comment"></i>
            </div>

            <div className="retweet">
                <i className="fas fa-retweet"></i>
                6
            </div>

            <div className="favorite">
                <i className="far fa-heart"></i>
                4
            </div>

            <div>
                <i className="far fa-envelope"></i>
            </div>
        </div>
    )
}

export default Footer;

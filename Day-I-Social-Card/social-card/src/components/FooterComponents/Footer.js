import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <i className="far fa-comment"></i>
                <span><i className="fas fa-sync"></i> &nbsp; <span className="stats-num">6</span></span>
                <span><i className="far fa-heart"></i> &nbsp; <span className="stats-num">4</span></span>
                <i className="far fa-envelope"></i>
            </div>
            <hr />
        </footer>
    );
};

export default Footer;
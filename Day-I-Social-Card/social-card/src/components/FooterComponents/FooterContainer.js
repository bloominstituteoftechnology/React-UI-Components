import React from 'react';
import './Footer.css';

const FooterContainer = () => {
    return (
        <footer className="card-footer">
            <a><i className="far fa-comment fa-flip-horizontal"></i></a>
            <a><i className="fas fa-sync"></i><span className="social-counter">6</span></a>
            <a><i className="far fa-heart"></i><span className="social-counter">4</span></a>
            <a><i className="far fa-envelope"></i></a>
        </footer>
    )
};

export default FooterContainer;
import React from 'react';
import './Footer.css';

const FooterContainer = () => {
    return (
        <footer className="card-footer">
            <a id="comment-icon"><i className="far fa-comment fa-flip-horizontal"></i></a>
            <a id="share-icon"><i className="fas fa-sync"></i><span className="social-counter">6</span></a>
            <a id="likes-icon"><i className="far fa-heart"></i><span className="social-counter">4</span></a>
            <a id="message-icon"><i className="far fa-envelope"></i></a>
        </footer>
    )
};

export default FooterContainer;
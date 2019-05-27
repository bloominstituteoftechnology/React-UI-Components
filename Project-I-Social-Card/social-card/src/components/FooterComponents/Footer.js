import React from 'react';
import './Footer.scss';

const Footer = props => {
    return (
        <div className = "footerContainer">
            <i className="far fa-comment"></i>
            <div className = "refresh">
                <i className="fas fa-sync"></i>
                <span>6</span>
            </div>
            <div className = 'liked'>
                <i className="far fa-heart"></i>
                <span>4</span>
            </div>
            <i className="far fa-envelope"></i>
        </div>
    );
}

export default Footer; 
import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContent = props => {
    return (
        <div className="card-content-container">
            <div className="card-content-title">
                Get Started with React
            </div>
            <div className="card-content-text">
                React makes it painles to create interactuve UIs. Design simple views for each state in your application.
            </div>
            <div className="card-content-link-text">
                reactjs.org
            </div>
        </div>
    );
};

export default CardContent;
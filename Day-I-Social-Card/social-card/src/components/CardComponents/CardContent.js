import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContent = () => {
    return(
        
        <div className = "cContent">
        <CardBanner />
        <h5>
            Get Started with React
        </h5>
        <p>
            React Makes it painless to create interactive UIs. Design simple views for
            each state in your application.
        </p>
        <p className = "web">
            reactjs.org
        </p>
        </div>
    );
}

export default CardContent;
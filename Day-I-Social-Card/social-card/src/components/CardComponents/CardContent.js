import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";





const CardContent = () => {
    return (
        <div className = "card-content">
            <CardBanner />

            <h2>Get started with React</h2>
            <p> React makes it painless...</p>
            <p> reactjs.org </p>
        </div>
    );
};

export default CardContent; 

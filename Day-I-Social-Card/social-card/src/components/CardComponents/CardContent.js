import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";


const CardContent = () => {
    return (
        <div className = "card-content">
            <CardBanner />
            <div className = "card-content-bottom">
                <h2>Get started with React</h2>
                <p> React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                <p className = "gray-link"> reactjs.org </p>
            </div>
        </div>
    );
};

export default CardContent; 

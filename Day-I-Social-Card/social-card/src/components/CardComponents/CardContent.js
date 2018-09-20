import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="cardContent">
            <h1>Getting started with React</h1>
            <p>
                React makes it painless to create interactive UIs.
                Design simple views for each state in your application.
            </p>
            <div className="footNote">reactjs.org</div>
        </div>
    )
};

export default CardContent;
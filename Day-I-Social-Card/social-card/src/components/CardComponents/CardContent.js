import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="cardContent">
            <h2>Get started with React</h2>
            <p>
                React makes it painless ot create interactive UIs. 
                Design simple views for each state in your application.
            </p>
            <a href="https://www.reactjs.org">reactjs.org</a>
        </div>
    );
};

export default CardContent;
import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <a href = "https://www.reactjs.org" className = 'card-content'>
            <h1 className = 'card-header'>
                Get Started With React
            </h1>
            <p className = 'card-text'>
            React makes it painless to create 
            interactive UIs. Design simple views for each state 
            in your application. 
            </p>
            <p className = 'link-text'>reactjs.org
            </p>
        </a>
    );
};

export default CardContent;

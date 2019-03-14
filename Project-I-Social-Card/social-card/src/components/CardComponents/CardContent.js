import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className = "card-content">
            <h2 className = "card-content-title">
                Get Started with React
            </h2>
            <p className = "card-content-paragraph">
                React makes it painless to create interactive UIs. Design simple views for each state in your application.
            </p>
            <p className = "card-content-url">
                reactjs.org
            </p>
        </div>
    );
};

export default CardContent;
import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="bottom-content">
        <h1 className="bottom-head">
            Get started with React!
        </h1>
        <p className="bottom-paragraph">
            React makes it painless to create interactive Uls. Design simple views for each state in your application.
        </p>
        <span className="react-tag">reactjs.org</span>
        </div>
    );
};

export default CardContent;

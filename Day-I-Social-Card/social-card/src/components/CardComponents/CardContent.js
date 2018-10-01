import React from 'react';
import './Card.css';

const CardContent = (props) => {
    return (
        <div className = "card-content">
            <p className = "content-title">Get started with React</p>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className = "card-content-caption">reactjs.org</p>
        </div>
    );
};

export default CardContent;
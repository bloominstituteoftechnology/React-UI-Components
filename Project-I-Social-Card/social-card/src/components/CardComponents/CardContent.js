import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card_content">
            <p className="bold">Get started with React</p>
            <p>React makes it painless to create UIs. Design simple views for each state in your application.</p>
            <p className="grey">reactjs.org</p>
        </div>
    );
};

export default CardContent;
import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="card-content">
            <h1 className="title">Get started with React</h1>
            <p className="description">React makes it painless to create interactive UIs. Design simple views for 
                each state in your application.
            </p>
            <span className ="link">reactjs.org</span>
        </div>
    );
}

export default CardContent;
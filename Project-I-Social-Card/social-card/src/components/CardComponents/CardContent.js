import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            <p className="card-content-title">Get Started with React</p>
            <p className="card-content-blurb">React makes it painless to create interactive UIs. Design simple views for each state in your application.
            </p>
            <p className="card-content-link">reactjs.org</p>
        </div>
    );
}

export default CardContent;
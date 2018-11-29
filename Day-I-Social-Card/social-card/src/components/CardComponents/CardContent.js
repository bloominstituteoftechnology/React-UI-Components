import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            <h2>Get started with React</h2>
            <p>
                React makes it painless to create interactive UIs. Design simple views for each state in your application.
            </p>
            <span className="link-text">
                reactjs.org
            </span>
        </div>
    )
}

export default CardContent;
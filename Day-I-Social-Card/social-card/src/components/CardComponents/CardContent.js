import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className="card-content">
        <h1>
            Get Started With React
        </h1>
        <p>
            React makes it painless to create interactive UIs. Design simple views for each state in your application.
        </p>
        <p class="react-link">
        reactjs.org
        </p>
        </div>
    )
}

export default CardContent;
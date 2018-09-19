import React from 'react';
import './Card.css';

const CardContent = () => {

    return (
        <div className="card-text">
            <h1>Get Started with React</h1>
            <p className = "content-text">
                React makes it painless to create interactive UIs. Design simple views for each 
                state in your application.
            </p>
            <p className="stamp">reactjs.org</p>
        </div>
    )
}

export default CardContent;
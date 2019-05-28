import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className="card-content-container">
            <p className="card-title"> Get started with React</p>
            <p className="card-content">React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
            <p className="card-link">reactjs.org</p>
        </div>
    )
}

export default CardContent;
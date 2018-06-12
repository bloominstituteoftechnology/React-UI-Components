import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            <p className="link-title">
                Get started with React
            </p>
            <p className="link-description">
                React makes it painless to create interactive UIs. Design simple views for each state in your application.
            </p>
            <a className="link" href="https://reactjs.org/" target="_blank">
                reactjs.org
            </a>
        </div>
    )};

    export default CardContent;
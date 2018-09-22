import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="banner-bottom">
            <h4 className="banner-content">Get started with React</h4>
            <p className="banner-content">
            React makes it painless to make interactive UIs. Design simple views for each state in your application.
            </p>
            <a href="https://reactjs.org"
            className="banner-content header-content link">
            reactjs.org
            </a>
        </div>
    );
};

export default CardContent;
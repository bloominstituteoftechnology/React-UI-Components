import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="banner-bottom">
        <p className="banner-content">Get Started with React</p>
        <p className="banner-content">
        React Makes it painless to make interactive UIs. Design simple views for each state in your app.
        </p>
        <a
        href="http:reactjs.org"
        className="banner-content header-content link"
        >
        reactjs.org
        </a>
        </div>
    );
};

export default CardContent
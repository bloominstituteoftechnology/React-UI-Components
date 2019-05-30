import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="banner-bottom">
            <p className="banner-content">
                Get started with React
            </p>
            <p className="banner-content">
                React makes it painless to make interactive UI's. Design simple views
                for each state in your application.
            </p>
            <a href="http://reactjs.org/" className="banner-content header-content link">
                reactjs.org
            </a>
        </div>
    );
}

export default CardContent;
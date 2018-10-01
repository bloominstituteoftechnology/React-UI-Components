import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="banner-text-section">
            <p className="banner-text">Get started with React</p>
            <p className="banner-text">React makes it painless to make interactive UI's. Design simple views
            for each state in your application.
            <br /><span className="link" href="reactjs.org" target="blank">react.js.org</span>
            </p>
        </div>
    );
};

export default CardContent;
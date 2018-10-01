import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="banner-bottom">
            <p className="banner-content">Get started with React</p>
            <p className="banner-content">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a href="http://reactjs.org" className="banner-content content-link">
                reactjs.org
            </a>
        </div>
    );
}

export default CardContent;
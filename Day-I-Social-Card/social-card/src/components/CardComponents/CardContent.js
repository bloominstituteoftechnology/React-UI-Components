import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-body">
            <p className="card-text">React makes it painless to create interactive uls. Design simple views for each state in your application.</p>
            <a href="https://react.js.org/" target="a_blank" className="card-link">reactjs.org</a>
        </div>
    );
};

export default CardContent;
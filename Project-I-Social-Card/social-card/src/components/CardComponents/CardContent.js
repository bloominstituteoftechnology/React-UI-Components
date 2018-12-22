import React from 'react';
import './Card.css';

const CardContent = (props) => {
    return (
        <div className="cardContent">
            <h2>Get Started with React</h2>
            <p className="cardContent--text">React makes it painless to creat interactive UIs. Design simple views for each state in your application.</p>
            <p className="cardContent--web">reachjs.org</p>
        </div>
    )
}

export default CardContent;
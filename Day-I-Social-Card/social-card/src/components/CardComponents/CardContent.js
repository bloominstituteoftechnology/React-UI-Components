import React from 'react';
import './Card.css';

function CardContent(){
    return (
        <div className = 'card-text'>
            <h3>Get Started with React</h3>
            <p>Reach makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <span>reactjs.org</span>
        </div>
    );
};

export default CardContent;
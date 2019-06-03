import React from 'react';
import './Card.css';

function CardContent (){
    return (
        <div className = 'cardContent'>
        <h1>Get Started With React</h1>
        <p>
        React makes it painless to create interactive UIs. Design simple views for each state in your application.
        </p>
        <p className = 'reactUrl'>reactjs.org</p>
        </div>
    )
}

export default CardContent;
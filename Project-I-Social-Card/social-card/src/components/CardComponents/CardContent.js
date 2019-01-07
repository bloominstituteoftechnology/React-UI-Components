import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='card-content'>
            <h2>Get Started With React</h2>
            <p>
                React makes it painless to create interactive UIs. Design simple views for each state in your application.
            </p>
            <a href='reactjs.org'>Reactjs.org</a>
        </div>
    );
};

export default CardContent;
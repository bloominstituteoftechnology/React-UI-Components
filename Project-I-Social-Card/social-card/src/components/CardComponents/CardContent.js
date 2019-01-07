import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className = 'card-content'>
            <h1>Get started with React</h1>
            <p className = 'card-content-p'>
            React Makes it painless to create interactive UIs. Design simple views for each state in you application.
            </p>
            <div className = 'card-content-a'>
                <a href='https://reactjs.org'>reactjs.org</a>
            </div>
        </div>
    );
}


export default CardContent;
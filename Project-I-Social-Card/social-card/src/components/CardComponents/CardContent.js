import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='cardInfo'>
            <h1>Get started with React</h1>
            <p>React makes it painless to create interactive UIs.
                Design simple views for each state in your application.
            </p>
            <p className="reactJS">reactjs.org</p>
        </div>
    );
}

export default CardContent;
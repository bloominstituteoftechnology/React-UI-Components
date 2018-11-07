import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className='card-content'>
            <h2>Get started with React</h2>
            <p>React makes it painless to create interactive Uis. Design simple views for each state in your application.</p>
            <p className='greytext'>reactjs.org</p>
        </div>
        
    );
};

export default CardContent;

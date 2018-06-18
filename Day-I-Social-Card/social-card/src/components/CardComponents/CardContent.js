import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='card-content'>
            <span className='title'>Get started with React</span>
            <span className='description'>React makes it painless to create interactive UIs. Design simple views for each state in your application</span>
            <span className='url'>reactjs.org</span>
        </div>
    );
};
 
export default CardContent;
import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            <h4 className='card-title'>Get started with React</h4>
            <p className='card-description'>React makes it painless to create interactive UIs. Design simple views for each start in your application.</p>
            <p className='card-link'>reactjs.org</p>
        </div>
    );
}

export default CardContent;
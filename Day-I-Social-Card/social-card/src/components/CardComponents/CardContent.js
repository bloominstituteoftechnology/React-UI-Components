import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='card-content-wrapper' >
            <h4 className='card-content-header' >Get started with React</h4>
            <p className='card-content' >
                React makes it paniless to create interactive UOs.  Design simple views for each state in your application.
            </p>
            <p className='card-content' >reactjs.org</p>
        </div>
    );
};

export default CardContent;
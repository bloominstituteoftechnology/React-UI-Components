import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='card-content'>
            <div className='card-title'>Get Started with React</div>
            <div className='card-status'>React makes it painless to create interactive UIs.
            Design simple views for each state in your application.</div>
            <a className='card-link' href='https://www.reactjs.org' target='_blank'>reactjs.org</a>
        </div>
    );
};

export default CardContent;
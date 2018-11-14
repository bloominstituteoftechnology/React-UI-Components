import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='card-content'>
            <p className='text-content'>Get started with React</p>
            <p className='text-content'>
            React makes it painless to make interactive UI's. Design simple views
            for each state in your application.
            </p>
            <a 
                className='text-content header-content link'
                href='http://reactjs.org'
            >
            ReactJS.org
            </a>    
        </div>
    );
}

export default CardContent;

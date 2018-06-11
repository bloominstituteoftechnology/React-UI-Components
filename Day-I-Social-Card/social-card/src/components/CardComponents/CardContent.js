import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className=' lightBorder'>
            <p className='header_Card'>Get started with React</p>
            <p>
                React makes it painless to create interactive UIs. Design simple views for eac state in your application."
            </p>
            <p className='emailLine'>reactjs.org</p>
        </div>
    )
}

export default CardContent;
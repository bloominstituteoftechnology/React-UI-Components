import React from 'react';
import './Card.css';

const CardContent = () => {
    return ( 
        <div className='card-text-content'>
            <h2>Get started with React</h2>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a className='link' href='https://reactjs.org/'>reactjs.org</a>
        </div>
    );
}

export default CardContent;
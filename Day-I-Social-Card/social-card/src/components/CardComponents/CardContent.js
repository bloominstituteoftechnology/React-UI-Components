import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='card__content'> 
            <h1> Get started with React</h1>
            <p> React makes it painless to create interactive UIs. Design simple views fot each state in your application. </p>
            <p className='card__a'> reactjs.org</p>
        </div>
    );
}
export default CardContent;

import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContent = () => {
    return (
        // <a href=""></a>
<a className='card-content' href='https://reactjs.org/'>
<CardBanner />
    <div className='bottom-card-content'>
        <h1 className='bottom-title'>
            Get started with React 
        </h1>
            <p className='card-paragraph'>
            React makes it painless to creat interactive UIs. Design simple views for each state in your application.
            </p>

        <span className='react'>reactjs.org</span>
    </div>
</a>
    );
};

export default CardContent;
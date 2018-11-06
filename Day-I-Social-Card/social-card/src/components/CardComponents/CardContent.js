import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

function CardContent () {
    return (
        <a className='card-content' href='https://www.reactjs.org'>
            <CardBanner />
            <div className='card-text'>
                <h3>Get started with React</h3>
                <p>React Makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                <div className='card-link'>reactjs.org</div>
            </div>            
        </a>        
    );
}

export default CardContent;
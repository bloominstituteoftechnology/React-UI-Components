import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <div className='card-container'>
            <CardBanner  source='https://ibin.co/3wnC6SgIOJud.png' alt='ReactJS Banner' />
            <CardContent 
                title='Get started with React' 
                content='React makes it painless to create interactice UIs. Design simple views for each state in your application.' 
                url='reactjs.org'
            />
        </div>
    )
}

export default CardContainer;
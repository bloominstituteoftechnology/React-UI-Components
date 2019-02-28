import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = props => (
    <div className='card-container'>
        <CardBanner banner={props.card.banner} />
        <CardContent content={props.card.content}/>
    </div>
)

export default CardContainer
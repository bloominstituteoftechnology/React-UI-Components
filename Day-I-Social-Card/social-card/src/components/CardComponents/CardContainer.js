import React from 'react';
import './Card.css';
import './CardContent'
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => (<div className='card-container'>
<CardContent/>
<CardBanner/>
</div>);


export default CardContainer;
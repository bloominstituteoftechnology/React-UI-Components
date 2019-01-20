import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {
  return(
    <div className='content'>
      <CardBanner />
      <CardContent />
    </div>
  )
}

export default CardContainer;

import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = props => {
  return (
    <div class="cardContainer"> 
      <CardBanner />
      <CardContent />
    </div>
  )
}

export default CardContainer;


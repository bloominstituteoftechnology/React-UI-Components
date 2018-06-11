import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
  <div className = 'card-wrapper'>
    <div className = 'card-image'>
      <CardBanner />
    </div>
    <div className = 'card-text'>
      <CardContent />
    </div>
  </div>
  );
};

export default CardContainer;

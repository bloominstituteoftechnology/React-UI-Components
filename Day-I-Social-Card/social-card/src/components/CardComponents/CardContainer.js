import React from 'react';
import './Card.css';

import './CardBanner';
import './CardContent';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div className="cardContainer">
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;

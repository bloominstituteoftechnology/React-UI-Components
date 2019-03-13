import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return(
    <div>
      <p>CardContainer goes here</p>
      <CardBanner />
      <CardContent />
    </div>
  );
}
export default CardContainer;
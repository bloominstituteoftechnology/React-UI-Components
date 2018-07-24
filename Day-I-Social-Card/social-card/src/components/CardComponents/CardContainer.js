import React from 'react';
import './Card.css';

import CardContent from './CardContent';
import CardBanner from './CardBanner';

const Card = () => {
  return (
    <div className='card'>
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default Card;
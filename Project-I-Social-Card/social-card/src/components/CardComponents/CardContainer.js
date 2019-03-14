import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
  return (
    <div className="card-container">
      <CardBanner />
      <div>
        <CardContent />
      </div>
    </div>
  );
};

export default CardContainer;
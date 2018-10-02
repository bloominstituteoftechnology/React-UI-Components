import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const Card = () => {
  return (
    <div className="Card">
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default Card;

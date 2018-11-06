import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => (
  <div className="Card">
    <CardBanner />
    <CardContent />
  </div>
);

export default CardContainer;

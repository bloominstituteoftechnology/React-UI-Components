import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
  return (
    <a href="https://www.reactjs.org">
      {' '}
      <div className="card-container">
        <CardBanner />
        <CardContent />
      </div>
    </a>
  );
};

export default CardContainer;

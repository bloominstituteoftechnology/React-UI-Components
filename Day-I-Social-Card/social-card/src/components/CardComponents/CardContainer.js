import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => (
  <div className="card-container">
    <a className="card-link" href="https://www.reactjs.org">
      <CardBanner />
      <CardContent />
    </a>
  </div>
);

export default CardContainer;

import React from 'react';
import CardBanner from './CardBanner';
import CardContent from'./CardContent';
import './Card.css';

const CardContainer = () => {
  return (
    <div class="card-container">
      <a href="https://www.reactjs.org">
        <CardBanner />
      </a>
      <CardContent />
    </div>
  )
}

export default CardContainer;

import React from 'react';
import './Card.css';

import './CardBanner';
import './CardContent';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <a className="containerLink" href="https://www.reactjs.org">
      <div className="cardContainer">
        <CardBanner />
        <CardContent />
      </div>
    </a>
  );
};

export default CardContainer;

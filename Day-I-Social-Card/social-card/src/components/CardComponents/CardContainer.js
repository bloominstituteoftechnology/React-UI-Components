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
      <a className="reactLink" href="https://www.reactjs.org">
        reactjs.org
      </a>
    </div>
  );
};

export default CardContainer;

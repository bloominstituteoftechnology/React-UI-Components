import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {
  return (
    <div className="card-container-wrap">
      <div className="card-wrap">
        <a href="https://www.reactjs.org">
          <CardBanner />
          <CardContent />
        </a>
      </div>
    </div>
  );
};

export default CardContainer;

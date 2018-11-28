import React from 'react';
import CardBanner from './CardBanner';

import './Card.css';

const cardContainer = (props) => {
  return (
    <div className="card">
      <CardBanner />
    </div>
  );
};

export default cardContainer;
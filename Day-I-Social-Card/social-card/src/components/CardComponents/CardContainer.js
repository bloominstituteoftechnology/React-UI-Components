import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

import './Card.css';

const cardContainer = (props) => {
  return (
    <div className="card">
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default cardContainer;
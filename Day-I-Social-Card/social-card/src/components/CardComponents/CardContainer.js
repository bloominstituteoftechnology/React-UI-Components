import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  function onClickCard(e) {
    e.preventDefault();
    window.location.href = 'https://www.reactjs.org';
  }

  return(
    <div className="card" onClick={onClickCard}>
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;
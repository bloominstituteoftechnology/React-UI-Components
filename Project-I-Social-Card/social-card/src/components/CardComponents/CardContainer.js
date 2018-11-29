import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = (props) => {
  return (
    <a className="links" href="https://www.reactjs.org" target="_blank" rel="noopener noreferrer">
      <div className="CardContainer">
        <CardBanner />
        <CardContent />
      </div>
    </a>
  )
}

export default CardContainer;

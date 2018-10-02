import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
  return (
    <article className="cardWrap">
      <CardBanner />
      <CardContent/>
      </article>
  );
}



export default CardContainer;
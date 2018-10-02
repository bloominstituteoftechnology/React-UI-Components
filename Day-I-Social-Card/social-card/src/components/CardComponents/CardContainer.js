import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const reactRoute = (element) => {
  window.location = 'https://www.reactjs.org/';
  console.log(element);
}

const CardContainer = () => {
  return (
    <section className='card-container' onClick={reactRoute}>
      <CardBanner />
      <CardContent />
    </section>
  );
}

export default CardContainer;

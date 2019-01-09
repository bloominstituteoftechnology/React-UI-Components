import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const Card = () => {
  console.log('Code me, Disney.');
  return <a className='cardHref' href='https://www.reactjs.org'> 
    <div className='card'>
      <CardBanner />
      <CardContent />
    </div>
  </a>
}

export default Card;
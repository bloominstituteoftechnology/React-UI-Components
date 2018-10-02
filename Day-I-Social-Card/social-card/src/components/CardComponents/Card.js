import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const Card = props => {
  return (
    <a href='https://reactjs.org'>
      <div className='card'>
        <CardBanner />
        <CardContent />
      </div>
    </a>
  );
}


export default Card;
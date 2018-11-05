import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = (props) => {
  return (
    <div className={'card-container'}>
      <CardBanner image={props.image} />
      <CardContent heading={props.heading} 
      content={props.content}
      additional={props.additional} />
    </div>
  );
};

export default CardContainer;
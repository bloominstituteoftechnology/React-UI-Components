import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = (props) => {
  return (
    <a href={`http://${props.url}`}>
      <div className={'card-container'}>
        <CardBanner image={props.image} />
        <CardContent heading={props.heading} 
        content={props.content}
        url={props.url} />
      </div>
    </a>
  );
};

export default CardContainer;
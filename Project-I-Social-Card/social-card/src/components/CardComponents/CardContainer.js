import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = (props) => {
  return (
    <div className={'card-container'}>
      <a href={`http://${props.url}`}>
        <CardBanner image={props.image} />
      </a>
      <a href={`http://${props.url}`}>
        <CardContent heading={props.heading} 
        content={props.content}
        url={props.url} />
      </a>
    </div>
  );
};

export default CardContainer;
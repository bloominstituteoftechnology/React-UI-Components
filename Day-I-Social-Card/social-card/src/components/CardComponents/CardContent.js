import React from 'react';
import './Card.css';

const CardContent = (props) => {
  return (
    <div className={'card-content'}>
      <h3>{props.heading}</h3>
      <p>{props.content}</p>
      <span>{props.additional}</span>
    </div>
  ) 
};

export default CardContent;
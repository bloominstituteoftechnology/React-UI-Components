import React from 'react';
import './Card.css';

const CardParagraph = (props) => {
  return <p className="CardParagraph">{props.text}</p>;
};

export default CardParagraph;
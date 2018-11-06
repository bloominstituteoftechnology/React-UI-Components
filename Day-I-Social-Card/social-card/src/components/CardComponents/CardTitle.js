import React from 'react';
import './Card.css';

const CardTitle = (props) => {
  return <h2 className="CardTitle">{props.title}</h2>;
};

export default CardTitle;
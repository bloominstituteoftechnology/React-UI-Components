import React from 'react';
import './Card.css';
import Card from './Card';

const CardContainer = props => {
  return (
    <a href="https://www.reactjs.org" target="_blank" className="CardContainer">
      <Card />
    </a>
  );
};

export default CardContainer;

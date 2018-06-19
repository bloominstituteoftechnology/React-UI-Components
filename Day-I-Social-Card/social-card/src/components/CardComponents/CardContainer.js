import React from 'react';
import './Card.css';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div className="card-wrapper">
      <CardContent />
      <h1>Get started with React </h1>
    </div>
  );
};

export default CardContainer;

import React from 'react';
import './Card.css';

const CardContent = ({ cardTitle, cardContent }) => {
  return (
    <div className="cardContent">
      <h2>{cardTitle}</h2>
      <p>{cardContent}</p>
    </div>
  );
};

export default CardContent;
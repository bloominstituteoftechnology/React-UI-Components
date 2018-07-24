import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="main-card__content-container">
      <h1>Get started with react</h1>
      <p className="main-card__content-text">React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
      <p className="main-card__content-link">reactjs.org</p>
    </div>
  );
};

export default CardContent;
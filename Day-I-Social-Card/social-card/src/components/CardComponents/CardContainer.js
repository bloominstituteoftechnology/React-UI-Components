import React from 'react';
import './Card.css';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div className="card-wrapper">
      <CardContent />
      <h1>Get started with React </h1>
      <p>
        React makes it painless to create interactive UIs. Design simple views for each state in
        your application.
      </p>
      <p>reactjs.org</p>
    </div>
  );
};

export default CardContainer;

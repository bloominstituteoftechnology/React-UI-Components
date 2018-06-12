import React from 'react';
import './Card.css';

const CardContent = () => {
  return(
    <div className="card-content">
      <span className="card-content__title">Get started with React</span>
      <span className="card-content__description">React makes it painless to create interactive UIs. Design simple views for each state in your application.</span>
      <span className="card-content__url">reactjs.org</span>
    </div>
  );
};

export default CardContent;
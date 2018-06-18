import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card-text-wrapper">
      <h2>Get started with React</h2>
      <p>React makes it painless to create interactive UIs.
      Design simple views foreach state in your application.</p>
      <p className="card-footer-text">reactjs.org</p>
    </div>
  );
};

export default CardContent;

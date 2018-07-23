import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card-content-container">
      <h1>Get started with react</h1>
      <p className="card-content-container-text">React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
      <p className="card-content-link colored coloredB">reactjs.org</p>
    </div>
  );
};

export default CardContent;
import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card-content-wrapper">
      <h2 className="card-content">Get started with React</h2>
      <p className="card-content">React makes it painless to create interactive UIs. 
        Design simple views for each state in your application.
      </p>
      <h6 className="card-content">reactjs.org</h6>
    </div>
  );
};

export default CardContent;
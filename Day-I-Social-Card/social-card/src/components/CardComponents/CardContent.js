import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card-content-wrapper">
      <h2 className="card-content">Get started with React</h2>
      <p className="card-content">React makes it painless to create interactive UIs. 
        Design simple views for each state in your application.
      </p>
      <a className="card-content" href="https://www.reactjs.org">reactjs.org</a>
    </div>
  );
};

export default CardContent;
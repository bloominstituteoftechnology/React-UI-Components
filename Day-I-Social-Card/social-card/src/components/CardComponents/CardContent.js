import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <div className="card-content">
      <h2>Get started with React</h2>
      <p>
        React makes it painless to creat interactive UIs. Design simple views
        for each state in your application.
      </p>
      <h3>reactjs.org</h3>
    </div>
  );
};

export default CardContent;

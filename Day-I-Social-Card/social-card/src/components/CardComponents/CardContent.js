import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <div className="card-content">
      <h3>Get started with React</h3>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <a href="https://www.reactjs.org">reactjs.org</a>
    </div>
  );
};

export default CardContent;

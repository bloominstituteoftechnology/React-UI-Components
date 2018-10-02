import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <div className="card-content">
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <h3 className="content title">Get started with React</h3>
      </a>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <p className="content text">
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application.
        </p>
      </a>
      <a href="https://www.reactjs.org" target="_blank" rel="noopener noreferrer">reactjs.org</a>
    </div>
  );
};

export default CardContent;

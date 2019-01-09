import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className='card-content'>
      <div className='card-content-container'>
        <h1>Get started with React</h1>
        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application
        </p>
        <span>reactjs.org</span>
      </div>
    </div>
  );
};

export default CardContent;

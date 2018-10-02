import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className = 'cardInfo'>
      <h1> Get Started with React</h1>
      <p className = 'cardText'> React makes ot painless to create interactive UIs. Design
      simple views for each state in your application</p>
      <a className = 'reactLink' href = 'https://www.reactjs.org'> reactjs.org</a>
    </div>
  )

};

export default CardContent;
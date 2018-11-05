import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card--content">
      <h4 className="card--header"> Get started with React</h4>
      <p className="card--text">React makes is painless to create interactive UIs. Design simple views for each state in your application.</p>
      <p className="card--link">reactjs.org</p>
    </div>
  );
}

export default CardContent;
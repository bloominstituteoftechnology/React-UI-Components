import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div>
      <h3 className="card-title">Get started with React</h3>
      <p className="card-content">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      <a className="card-link" href="https://reactjs.org/">reactjs.org</a>
    </div>
  )
}

export default CardContent;

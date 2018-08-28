import React from 'react';
import './Card.css';

// Create a <CardContent /> component that displays the card copy provided.

const CardContent = () => (
  <div className="card-text">
    <h1>Get started with React</h1>
    <p>React Makes it Painless to create interactive UIs. Design simple views for each state in your application.</p>
    <p className="grey-text">reactjs.org</p>
  </div>
);

export default CardContent;

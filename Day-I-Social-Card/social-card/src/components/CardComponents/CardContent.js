import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContent = props => {
  return (
    <a href="https://www.reactjs.org" target="_blank" class="card-content">
      <CardBanner />
      <h1>Get Started with React</h1>
      <p>
        React makes it painless to create interactice UIs. Design simple views
        for each state in your application.
      </p>
      <h2>reactjs.org</h2>
    </a>
  );
};

export default CardContent;

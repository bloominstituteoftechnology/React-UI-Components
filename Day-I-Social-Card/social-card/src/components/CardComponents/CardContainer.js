import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

// Create a <CardContainer/ > container component that will hold your card components.
// The entire <CardContainer /> should take a user to https://www.reactjs.org when clicked.

const CardContainer = () => (
  <a href="https://www.reactjs.org">
    <div className="card">
      <CardBanner />
      <CardContent />
    </div>
  </a>
);

export default CardContainer;
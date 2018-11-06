import React from 'react';
import './Card.css';

const CardContent = () => (
  <div className="Card__content">
    <div className="Card__title mb-1">Get started with React</div>
    <p className="Card__paragraph mb-1">
      React makes it painless to create interactive UIs. Design simplie views
      for each state in your application.
    </p>
    <div className="Card__url">reactjs.org</div>
  </div>
);

export default CardContent;

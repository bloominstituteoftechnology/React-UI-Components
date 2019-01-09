import React from 'react';

import './Card.css';

const CardContent = () => {
  return (
    <div className="card__body__preview">
      <h1 className="card__body__preview__title">Get started with React</h1>
      <p className="card__body__preview__text">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      <p className="card__body__preview__url">reactjs.org</p>
    </div>
  );
};

export default CardContent;
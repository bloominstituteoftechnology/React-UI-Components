import React from 'react';
import './Card.css';

function CardContent() {
  return (
    <div className="CardContent">
      <h2 className="CardContent__title">Get Started with React</h2>
      <p>
        React makes it painless to create interactive UIs. Design simple views for each state in
        your application.
      </p>
      <p className="CardContent__link">reactjs.org</p>
    </div>
  );
}
export default CardContent;

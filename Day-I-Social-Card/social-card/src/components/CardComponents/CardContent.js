import React from 'react';
import './Card.css';

function CardContent(props) {
    return (
      <div className="cardText">
        <h3>Get Started With React</h3>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
        <p className="info">reactjs.org</p>
      </div>
    );
  }
  
  export default CardContent;
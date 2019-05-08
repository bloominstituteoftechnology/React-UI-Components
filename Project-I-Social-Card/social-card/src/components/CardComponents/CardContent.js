import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="content">
    <p><strong>Get started with React</strong></p>
      <p>React is the perfect tool to build interactive UIs. Design simple views for each state
      in your application.</p>
      <div className="watermark">
      <p>reactjs.org</p>
      </div>
    </div>
  );

}

export default CardContent;

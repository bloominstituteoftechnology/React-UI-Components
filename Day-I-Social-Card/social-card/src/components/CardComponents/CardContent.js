import React from 'react';
import './Card.css';

const CardContent = () => {

  return(
    <div className="card-content">
      <p className="bold">Get started with React</p>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      <p><span className="gray">reactjs.org</span></p>
    </div>
  );
};

export default CardContent;

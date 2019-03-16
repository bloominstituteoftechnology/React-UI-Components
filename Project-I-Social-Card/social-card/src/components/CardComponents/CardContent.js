import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card-content">
      <h1 className="content-title">Get Started with React</h1>
      <p className="content-p">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <a className="content-link" href="reactjs.org">
        reactjs.org
      </a>
    </div>
  );
};

export default CardContent;
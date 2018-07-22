import React from 'react';
import './Card.css';


const CardContent = () => {
  return (
    <div className="card-content">
      <h4 className="card-content-header">Get Started with React</h4>
      <p className="card-content-p">React makes it painless to create interactive UIs. Design simple views
        for each state in your application.</p>
      <a href="reactjs.org" className="card-content-link">reactjs.org</a>
    </div>
  );
};

export default CardContent;

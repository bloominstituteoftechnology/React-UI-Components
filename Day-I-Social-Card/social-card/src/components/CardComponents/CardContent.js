import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <div className="CardContent">
      <h2 className="CardContent__heading">Get Started With React</h2>
      <p className="CardContent__p">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <div className="CardContent__a" href="http://reactjs.org">
        reactjs.org
      </div>
    </div>
  );
};

export default CardContent;

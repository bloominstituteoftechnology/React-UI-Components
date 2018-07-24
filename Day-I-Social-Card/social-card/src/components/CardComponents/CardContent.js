import React from 'react';
import './Card.css';

const CardContent = () => {
  return(
        <a href="http://reactjs.org"  className="react">
    <div className="card">
      <p className="card-content">Get started with React</p>
      <p className="card-content">
        React makes it painless to make interactive UI's. Design simple views
        for each state in your application.
      </p>
      <a href="http://reactjs.org"  className="reactlink">
        reactjs.org
      </a>
    </div>


    </a>
)
}

export default CardContent;

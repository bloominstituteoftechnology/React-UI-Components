import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <div class='card-content'>
      <h2>Get Started with React</h2>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>

      <a href ="https://reactjs.org/" alt='react webpage'className='react-page'>
      reactjs.org
      </a>
    </div>
  );
};


export default CardContent;
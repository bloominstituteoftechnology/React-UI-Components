import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <div className="card-content">
      <h1>Get started with React</h1>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <span className="react-link">reactjs.org</span>
    </div>
  );
};

export default CardContent;

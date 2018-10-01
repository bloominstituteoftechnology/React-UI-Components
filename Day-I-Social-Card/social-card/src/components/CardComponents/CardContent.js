import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <div className="card-content">
      <h2 className="card-content-header">Get started with React</h2>
      <div className="card-content-main-text">
        <p>
          React makes it painless to create interactrive UIs. Design simple
          views for each state in your application.
        </p>
      </div>
      <div className="card-content-link">
        <span className="gray-note"><a href="https://www.reactjs.org">reactjs.org</a></span>
      </div>
    </div>
  );
};

export default CardContent;

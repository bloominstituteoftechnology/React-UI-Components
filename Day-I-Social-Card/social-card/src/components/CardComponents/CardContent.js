import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <div class="card-content">
      <h3>Get Started with React</h3>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state of your application.
      </p>
      <a className="card-link" href="https://react.js.org/">
        reactjs.org
      </a>
    </div>
  );
};

export default CardContent;

import React from "react";
import "./Card.css";

const CardContent = props => {
  // props = { type: "primary"}

  return (
    <div class="card-content">
      <h1 class="content-title">Get Started with React</h1>
      <p class="content-p">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <a class="content-link" href="reactjs.org">
        reactjs.org
      </a>
    </div>
  );
};

export default CardContent;

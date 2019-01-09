import React from "react";
import "./Card.css";

export function CardContent() {
  return (
    <div className="card-content">
      <a href="https://www.reactjs.org">
        <h2>Get started with React</h2>
        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application.
        </p>
        <p className="react-link">reactjs.org</p>
      </a>
    </div>
  );
}

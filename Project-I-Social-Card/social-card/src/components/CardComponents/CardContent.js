import React from "react";
import "./Card.css";

export const CardContent = () => {
  return (
    <div className="banner-text">
      <h3 className="banner-heading">Get Started with React</h3>
      <p className="text-section">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application
      </p>
      <a href="https://reactjs.org" className="react-url">
        {" "}
        reactjs.org
      </a>
    </div>
  );
};

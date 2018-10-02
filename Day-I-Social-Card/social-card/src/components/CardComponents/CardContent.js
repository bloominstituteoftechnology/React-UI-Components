import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <div className="cardContent">
      <h4>Get started with React</h4>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.{" "}
      </p>
      <p className="source">reactjs.org</p>
    </div>
  );
};

export default CardContent;

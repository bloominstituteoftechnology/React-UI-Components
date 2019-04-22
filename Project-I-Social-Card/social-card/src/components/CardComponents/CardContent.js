import React from "react";
import "./Card.css";

const CardContent = props => {
  return (
    <div className="padding-left">
      <p>
       React makes it painless to create interactive UIs. Design simple views for each state in your application.
      </p>
      <p className="grey">reactjs.org</p>
    </div>
  );
};

export default CardContent;

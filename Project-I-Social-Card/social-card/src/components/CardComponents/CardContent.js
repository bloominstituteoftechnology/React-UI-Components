import React from "react";
import "./Card.css";
import CardLink from "./CardLink";

function CardContent() {
  return (
    <div className="CardContent">
      <div className="CardTitle">Get started with React</div>
      <div className="CardText">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </div>
      <div className="CardLink">
        <CardLink />
      </div>
    </div>
  );
}

export default CardContent;

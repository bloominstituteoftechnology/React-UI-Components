import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";

const CardContent = () => {
  return (
    <a className="click" href="https://www.reactjs.org">
      <div className="card-banner">
        <CardBanner />
      </div>
      <div className="text-container">
        <h1>Get Started with React</h1>

        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application.
        </p>

        <div className="card-subtext">
          <p>reactjs.org</p>
        </div>
      </div>
    </a>
  );
};

export default CardContent;

import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";

const CardContainer = () => {
  return (
    <a href="https://www.reactjs.org">
      <div className="card-banner">
        <CardBanner />
      </div>
      <div className="text-container">
        <div className="card-tittle">
          <h1>Get Started with React</h1>
        </div>
        <div className="card-text">
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application.
          </p>
        </div>
        <div className="card-subtext">
          <p>reactjs.org</p>
        </div>
      </div>
    </a>
  );
};

export default CardContainer;

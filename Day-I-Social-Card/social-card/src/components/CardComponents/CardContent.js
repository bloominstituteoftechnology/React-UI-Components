import React from "react";
import "./Card.css";
const CardContent = () => {
  return (
    <div className="card__content">
      <h1 className="card__title">Get started with React</h1>
      <p className="card__description">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application
      </p>
      <p className="card__site">
        <a className="card__site__link" href="https://reactjs.org/">
          reactjs.org
        </a>
      </p>
    </div>
  );
};

export default CardContent;

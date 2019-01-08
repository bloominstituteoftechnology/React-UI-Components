import React from "react";
import "./Card.css";
import Banner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <div className="card-container">
      <a href="https://www.reactjs.org" className="toReact" target="_blank">
        <Banner />
        <CardContent />
      </a>
    </div>
  );
};

export default CardContainer;

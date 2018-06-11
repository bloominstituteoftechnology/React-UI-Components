import React from "react";
import "./Card.css";
import CardBanner from './CardBanner';
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <a href="https://www.reactjs.org"> <div  className="card-wrapper">
    <CardBanner />
      <CardContent />
    </div>
    </a>
  );
};

export default CardContainer;

import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <a className="card__container" href="https://www.reactjs.org">
      <CardBanner />
      <CardContent />
    </a>
  );
};

export default CardContainer;

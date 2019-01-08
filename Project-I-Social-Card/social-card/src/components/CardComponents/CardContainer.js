import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = props => {
  return (
    <div className="cardContainer">
      <CardBanner />
      <div className="cardContent">
        <CardContent />
      </div>
    </div>
  );
};

export default CardContainer;

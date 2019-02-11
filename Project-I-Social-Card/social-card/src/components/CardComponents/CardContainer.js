import React from "react";
import CardContent from "./CardContent";
import CardBanner from "./CardBanner";
import "./Card.css";

function CardContainer() {
  return (
    <div className="CardContainer">
      <CardContent />
      <CardBanner />
    </div>
  );
}

export default CardContainer;


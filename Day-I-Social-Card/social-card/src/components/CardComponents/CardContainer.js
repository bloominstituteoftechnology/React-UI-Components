import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = props => {
  return (
    <div class="card-container-wrapper">
      <div className="card-wrapper">
        <CardBanner />
        <CardContent />
      </div>
    </div>
  );
};

export default CardContainer;

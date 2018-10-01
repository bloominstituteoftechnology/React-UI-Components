import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = props => {
  // props = { type: "primary"}

  return (
    <div class="card-container">
      <CardBanner />
      <div>
        <CardContent />
      </div>
    </div>
  );
};

export default CardContainer;

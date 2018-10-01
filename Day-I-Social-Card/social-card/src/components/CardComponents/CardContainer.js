import React from "react";
import CardContent from "./CardContent";
import CardBanner from "./CardBanner";

const CardContainer = () => {
  return (
    <div className="card-container">
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;

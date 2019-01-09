import React from "react";
import "./Card.css";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => (
  <div
    className="CardContainer"
    onClick={e => {
      e.stopPropagation();
      window.open("https://www.reactjs.org");
    }}
  >
    <CardBanner />
    <CardContent />
  </div>
);

export default CardContainer;

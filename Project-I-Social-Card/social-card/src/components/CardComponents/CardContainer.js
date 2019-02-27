import React from "react";
import "./Card.css";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = ({ children, bannerImage, bannerAlt, cardLink }) => {
  return (
    <div onClick={() => doClick(cardLink)} className="cardtainer">
      {children}
    </div>
  );
};

const doClick = cardLink => {
  window.open(cardLink, "_blank");
};
export default CardContainer;

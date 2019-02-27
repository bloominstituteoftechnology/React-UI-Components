import React from "react";
import "./Card.css";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = ({ children, bannerImage, bannerAlt }) => {
  return <div className="cardtainer">{children}</div>;
};

export default CardContainer;

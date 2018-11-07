import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner.js";
import CardContent from "./CardContent.js";

const CardContainer = props => {
  return (
    <div className="cardContainer">
      <a href="//www.reactjs.org ">
        <CardBanner />
        <CardContent />
      </a>
    </div>
  );
};
export default CardContainer;

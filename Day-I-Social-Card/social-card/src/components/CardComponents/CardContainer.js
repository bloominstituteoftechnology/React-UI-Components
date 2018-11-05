import React from "react";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import "./Card.css";

function CardContainer() {
  return (
    <section className="cardContainer">
      <a href="https://www.reactjs.org" target="_blank">
        <CardBanner />
        <CardContent />
      </a>
    </section>
  );
}

export default CardContainer;

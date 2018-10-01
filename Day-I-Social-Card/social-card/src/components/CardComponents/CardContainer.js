import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <section className="cardContainer">
      <a href="https://www.reactjs.org" class="fill-div" />
      <CardBanner />
      <CardContent />
    </section>
  );
};

export default CardContainer;

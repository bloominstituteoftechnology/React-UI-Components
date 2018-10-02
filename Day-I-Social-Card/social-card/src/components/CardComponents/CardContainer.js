import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import Footer from "../FooterComponents/Footer";

const CardContainer = () => {
  return (
    <section className="cardContainer">
      <a href="https://www.reactjs.org" class="fill-div" />
      <CardBanner />
      <CardContent />
      <Footer />
    </section>
  );
};

export default CardContainer;

import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner.js";
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import CardContent from "./CardContent.js";
const cardContainer = () => (
  <div className="card-container">
    <a href="https://www.reactjs.org">
      <HeaderContainer />
      <CardBanner />
      <CardContent />
    </a>
  </div>
);

export default cardContainer;

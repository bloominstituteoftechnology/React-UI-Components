import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner.js";
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import CardContent from "./CardContent.js";
const cardContainer = () => (
  <div className="card-container">
    <HeaderContainer />
    <CardBanner />
    <CardContent />
  </div>
);

export default cardContainer;

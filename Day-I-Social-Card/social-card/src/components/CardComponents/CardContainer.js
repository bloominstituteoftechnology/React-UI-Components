import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner.js";
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import CardContent from "./CardContent.js";
import Footer from "../FooterComponents/Footer.js";

const cardContainer = () => (
  <div className="card-container">
    <a href="https://www.reactjs.org">
      <HeaderContainer />
      <CardBanner />
      <CardContent />
      <Footer />
    </a>
  </div>
);

export default cardContainer;

import React from "react";
import "./Card.css";

const CardBanner = ({ bannerImage, bannerAlt }) => {
  return <img src={bannerImage} alt={bannerAlt} />;
};

export default CardBanner;

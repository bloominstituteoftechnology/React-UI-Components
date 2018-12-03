import React from "react";
import "./Card.css";

const CardBanner = () => {
  return (
    <a className="banner-container-wrapper" href="https://reactjs.org">
      <img
        alt="react logo"
        className="banner-img"
        src="https://cdn-images-1.medium.com/max/1000/1*y6C4nSvy2Woe0m7bWEn4BA.png"
        style={{ width: "100%" }}
      />
    </a>
  );
};

export default CardBanner;

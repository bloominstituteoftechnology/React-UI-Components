import React from "react";
import "./Card.css";
import CardContent from "./CardContent.js";

const CardBanner = () => {
  return (
    <div className="CardBanner">
      <div className="banner-img">
        <img src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
      </div>
      <CardContent />
    </div>
  );
};

export default CardBanner;

import React from "react";
import "./Header.css";
import HeaderContent from "../HeaderComponents/HeaderContent";
import ImageThumbnail from "../HeaderComponents/ImageThumbnail";

const HeaderContainer = () => {
  return (
    <div class="header-container">
      <div class="img-container">
        <ImageThumbnail />
      </div>
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;

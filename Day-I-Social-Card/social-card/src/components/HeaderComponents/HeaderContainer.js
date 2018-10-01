import React from "react";
import "./Header.css";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => {
  return (
    <div class="header-container">
      <ImageThumbnail />
      <div class="header-text-content">
        <HeaderTitle />

        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;

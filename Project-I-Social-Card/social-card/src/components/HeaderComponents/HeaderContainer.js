import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

// import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";

const HeaderContainer = () => {
  return (
    <div class="header-container">
      <div>
        <ImageThumbnail />
      </div>
      <div class="container">
        <div class="header-title">
          <HeaderTitle />
        </div>

        <div class="content">
          <HeaderContent />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;

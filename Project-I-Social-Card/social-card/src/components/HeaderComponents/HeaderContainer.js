import React from "react";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import "./Header.css";

const HeaderContainer = () => (
  <div className="header-container">
    <ImageThumbnail />
    <div className="title-content">
      <HeaderTitle />
      <HeaderContent />
    </div>
  </div>
);

export default HeaderContainer;

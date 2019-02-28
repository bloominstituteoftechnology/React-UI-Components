import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = props => {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;
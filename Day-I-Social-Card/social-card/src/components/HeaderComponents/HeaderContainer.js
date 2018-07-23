import React from "react";
import "./Header.css";
import ImageTumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <ImageTumbnail />
        <HeaderTitle />
      </div>
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;

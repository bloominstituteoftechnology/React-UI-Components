import React from "react";
import "./Header.css";
import HeaderTitle from "./HeaderTitle";
import ImgThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";

const HeaderContainer = props => {
  return (
    <div className="header-container">
      <ImgThumbnail />
      <div className="header-content">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;

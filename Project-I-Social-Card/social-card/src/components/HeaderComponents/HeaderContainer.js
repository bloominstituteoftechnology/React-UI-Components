import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";
import HeaderTitle from "./HeaderTitle";
const HeaderContainer = () => {
  return (
    <header>
      <div className="thumbnail">
        <ImageThumbnail />
      </div>
      <div className="header-content">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  );
};
export default HeaderContainer;

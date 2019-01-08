import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";

const HeaderContainer = props => {
  return (
    <div className="header">
      <ImageThumbnail />
      <div className="headerContent">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;

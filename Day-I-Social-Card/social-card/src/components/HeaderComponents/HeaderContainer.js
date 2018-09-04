import React from "react";
import "./Header.css";

// component imports
import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";

const HeaderContainer = props => {
  return (
    <div className="header-wrapper">
      <ImageThumbnail />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;

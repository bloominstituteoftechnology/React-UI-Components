import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";

const HeaderContainer = props => {
  return (
    <div>
      <div className="header">
        <ImageThumbnail />
        <div className="content-container">
            <HeaderContent />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;

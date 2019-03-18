import React from "react";
import "./Header.css";
import ImageThumb from "./ImageThumbnail";
import HeaderLambda from "./HeaderTitle";

const HeaderContainer = () => {
  return (
    <div className="HeaderContainer">
      <ImageThumb />
      <HeaderLambda />
    </div>
  );
};

export default HeaderContainer;

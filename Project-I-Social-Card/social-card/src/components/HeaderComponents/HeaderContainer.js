import React from "react";
import "./Header.css";

import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = ({ direction, children }) => {
  return (
    <div className="headertainer" style={getStyle(direction)}>
      {children}
    </div>
  );
};

const getStyle = direction => {
  return {
    flexDirection: direction
  };
};

export default HeaderContainer;

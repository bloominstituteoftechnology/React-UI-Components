import React from 'react';
import './Header.css';

import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = ({ headerContainerStyles, children }) => {
  return (
    <div className="headertainer" style={headerContainerStyles}>
      {children}
    </div>
  );
};

export default HeaderContainer;
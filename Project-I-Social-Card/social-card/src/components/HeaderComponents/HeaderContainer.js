import React from 'react';
import './Header.css';
import Image from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

function HeaderContainer() {
  return (
    <div className="header-container">
      <Image />
      <div className="header-post">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
}

export default HeaderContainer;
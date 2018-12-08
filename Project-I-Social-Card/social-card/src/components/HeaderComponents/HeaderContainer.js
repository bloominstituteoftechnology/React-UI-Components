import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";


const HeaderContainer = () => (
    <div class="header-container">
      <ImageThumbnail />
      <div class="header-text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
  
  export default HeaderContainer;
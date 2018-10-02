import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from "./HeaderTitle";

const HeaderContainer = () => {
  return (
    
    <header className="headWrap">
      <HeaderTitle/>
      <ImageThumbnail/>  
      </header>
  );
}





export default HeaderContainer;
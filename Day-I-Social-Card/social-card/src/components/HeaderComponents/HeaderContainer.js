import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js'
import ImageThumbnail from './ImageThumbnail.js'
import HeaderContent from './HeaderContent.js'

const HeaderContainer = () => {
  return (
    <div class= "header">
      <ImageThumbnail />
      <div class= "header-text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;

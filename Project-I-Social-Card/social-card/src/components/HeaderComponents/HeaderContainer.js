import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent.js';
import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail.js';
const HeaderContainer = () => {
  return (
    <div className="container">
    <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />

    </div>
  );
}

export default HeaderContainer;

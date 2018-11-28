import React from 'react';
import './Header.css';
import ImgThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = () => {
  return (
    <header className="header">
      <HeaderContent />
      <ImgThumbnail />
    </header>
  );
};

export default HeaderContainer;

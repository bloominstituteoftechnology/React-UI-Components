import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => {
  return (
    <header className="Header">
      <ImageThumbnail />
      <HeaderContent />
    </header>
  );
};

export default HeaderContainer;

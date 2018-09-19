import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = props => (
  <header className="header-container">
      header container
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
  </header>
)

export default HeaderContainer

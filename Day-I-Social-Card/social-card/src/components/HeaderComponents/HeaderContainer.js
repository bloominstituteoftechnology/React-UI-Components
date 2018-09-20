import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = props => (
  <header className="header-container">
      <ImageThumbnail />
    <div className="header-container__content">
      <HeaderTitle />
      <HeaderContent />
   </div>
  </header>
)

export default HeaderContainer

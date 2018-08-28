import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

// Create a <HeaderContainer /> container component that will hold your header components.
const HeaderContainer = () => (
  <div className="header-wrap">
    <ImageThumbnail />
    <div className="header-content">
      <HeaderTitle />
      <HeaderContent />
    </div>
  </div>
);

export default HeaderContainer;
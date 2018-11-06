import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import './Header.css';

function HeaderContainer() {
  return <div className="HeaderContainer">
    <ImageThumbnail />
    <HeaderContent />
  </div>
}

export default HeaderContainer;
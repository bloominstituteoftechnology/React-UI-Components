import React from 'react';
import ImageThumbnail from './ImageThumbnail'
import HeaderContent from './HeaderContent'
import HeaderTitle from './HeaderTitle'
import './Header.css';

function HeaderContainer () {
  return (
    <div className="header-container">
      <div className="img-container">
        <ImageThumbnail />
      </div>
      <div className="header-content-container">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  )
}

export default HeaderContainer

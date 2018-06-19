import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js'
import HeaderContent from './HeaderContent.js'
import ImageThumbnail from './ImageThumbnail.js'

const HeaderContainer = () => {
  return (
    <div className="header-wrapper">
      <ImageThumbnail />
      <div className="content">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;

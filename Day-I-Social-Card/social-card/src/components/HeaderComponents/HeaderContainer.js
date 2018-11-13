import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
  return (
    <React.Fragment>
      <div className="header-container">
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
      </div>
    </React.Fragment>
  )
}

export default HeaderContainer;

import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
      <div className="headerContainer">
        <div><ImageThumbnail /></div>
        <HeaderContent />
      </div>
  )
}

export default HeaderContainer;
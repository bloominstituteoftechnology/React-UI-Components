import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
      <div className="headerContainer">
        <ImageThumbnail />
        <HeaderContent />
      </div>
    );
  };

export default HeaderContainer;

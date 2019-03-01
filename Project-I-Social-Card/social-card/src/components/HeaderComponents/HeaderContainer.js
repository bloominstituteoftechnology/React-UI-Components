import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
      <div className="HeaderContainer">
        <h3>HeaderContainer</h3>
        <ImageThumbnail />
        <HeaderContent />
      </div>
    );
  };

export default HeaderContainer; 
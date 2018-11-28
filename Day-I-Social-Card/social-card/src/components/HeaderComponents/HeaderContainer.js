import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';


const HeaderContainer = props => {
  return (
    <div>
      <ImageThumbnail />
      <HeaderContent />
    </div>
  );
}

export default HeaderContainer;

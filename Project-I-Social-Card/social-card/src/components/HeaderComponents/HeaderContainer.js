import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderRight from './HeaderRight';


const HeaderContainer = () => {
  return (
    <div id="header">
      <ImageThumbnail />
      <HeaderRight />
    </div>
  );
}

export default HeaderContainer;
import React from 'react';
import './Header.css';
import HeaderContent from  './HeaderContent';
import HeaderTitle from  './HeaderTitle';
import Thumbnail from  './ImageThumbnail';

const HeaderContainer = ( ) => {
  return (
  <div className = 'row headerContainer '>
  <Thumbnail />
  <div className = "col">
  <HeaderTitle />
  <HeaderContent />
  </div>
  </div>
);
};

export default HeaderContainer;

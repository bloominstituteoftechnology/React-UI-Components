import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = props => {
  return (
    <div className='headerContainer'>
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>  
  );
}


export default HeaderContainer;
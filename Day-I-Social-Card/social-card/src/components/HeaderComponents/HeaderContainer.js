import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => (
  <div className='header-container'>
    <ImageThumbnail />
    <HeaderContent />
  </div>
);

export default HeaderContainer;

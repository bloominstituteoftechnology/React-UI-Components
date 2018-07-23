import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const Header = () => {
  return (
    <div className='header'>
      <ImageThumbnail />
      <HeaderContent />
    </div>
  );
};

export default Header;
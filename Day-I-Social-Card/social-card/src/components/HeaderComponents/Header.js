import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContainer from './HeaderContainer';

const Header = props => {
  return (
    <div className='header'>
      <ImageThumbnail />
      <HeaderContainer />
    </div>
  );
}

export default Header;
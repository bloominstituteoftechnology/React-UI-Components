import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderImage from './ImageThumbnail';
const Header = () => {
  return (
    <div className='head-container'>
      <HeaderImage />
      <HeaderTitle />
    </div>
  )
}

export default Header;
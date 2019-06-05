import React from 'react';
import './Header.css';
import HeaderImage from './ImageThumbnail';
import HeaderContent from "./HeaderContent";
const Header = () => {
  return (
    <div className='head-container'>
      <HeaderImage />
      <HeaderContent />
    </div>
  )
}

export default Header;
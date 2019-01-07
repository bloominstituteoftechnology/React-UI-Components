import React from 'react';
import './Header.css';
import HeadImage from './ImageThumbnail';
import HeadContent from './HeaderContent';

const Header = () => {
  console.log('Code me, Disney.');
  return <div className='header'>
    <HeadImage />
    <HeadContent />
  </div>
}

export default Header;
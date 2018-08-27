import React from 'react';
import './Header.css';
import './ImageThumbnail';
import HeaderImage from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => (
  <div className="header-container">
    <HeaderImage />
    <HeaderTitle />
    <HeaderContent />
  </div>
);

export default HeaderContainer;

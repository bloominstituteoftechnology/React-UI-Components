import React from 'react';
import './Header.css';
import HeaderImage from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = (props) => (
  <div className="headerContainer">
    <HeaderImage />
    <HeaderTitle />
    <HeaderContent />
  </div>
);

export default HeaderContainer;
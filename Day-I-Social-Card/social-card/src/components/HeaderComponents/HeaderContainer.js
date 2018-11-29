import React from 'react';
import './Header.css';
import HeaderImage from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = (props) => (
  <div className="headerContainer">
    <HeaderImage />
    <div className="headerWrap">
      <HeaderTitle />
      <HeaderContent />
    </div>
  </div>
);

export default HeaderContainer;
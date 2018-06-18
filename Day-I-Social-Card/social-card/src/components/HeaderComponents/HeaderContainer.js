import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
  return ( 
    <div className="header-wrapper">
    Header Container
    <HeaderContent />
    </div>
   );
};

export default HeaderContainer;
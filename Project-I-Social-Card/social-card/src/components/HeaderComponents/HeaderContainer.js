import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
  return (
    <React.Fragment>
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </React.Fragment>
  );
};

export default HeaderContainer;

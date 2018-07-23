import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => (
  <div>
    <div className="header">
      <ImageThumbnail />
      <HeaderTitle />
    </div>
    <div>
      <HeaderContent />
    </div>
  </div>
);

export default HeaderContainer;

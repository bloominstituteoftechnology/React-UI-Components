import React from 'react';

import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
    <header className="card__header">
      <ImageThumbnail />
      <div className="card__header__text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  );
};

export default HeaderContainer;
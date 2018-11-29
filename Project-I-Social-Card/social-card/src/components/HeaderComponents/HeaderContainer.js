import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';



const HeaderContainer = prop => {
  return (
    <header>
      <ImageThumbnail />
      <section>
        <HeaderTitle />
        <HeaderContent />
      </section>
    </header>
  );
};

export default HeaderContainer;
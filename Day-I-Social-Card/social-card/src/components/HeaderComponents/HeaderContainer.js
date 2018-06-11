import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
      return (
        <div className = 'header-wrapper'>
        <ImageThumbnail />
       Header Container
        <HeaderContent />
     </div>
    );
};

export default HeaderContainer;
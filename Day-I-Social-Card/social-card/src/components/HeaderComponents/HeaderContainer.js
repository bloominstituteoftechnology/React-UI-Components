import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';

const HeaderContainer = () => {
    return (
      <div className = 'header'>
       <ImageThumbnail />
       <HeaderTitle />
      </div>
    );
  };

  export default HeaderContainer;
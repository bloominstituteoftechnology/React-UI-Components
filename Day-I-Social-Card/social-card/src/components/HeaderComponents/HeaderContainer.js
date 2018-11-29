import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = () => {
    return (
      <div className = 'header'>
       <ImageThumbnail />
      </div>
    );
  };

  export default HeaderContainer;
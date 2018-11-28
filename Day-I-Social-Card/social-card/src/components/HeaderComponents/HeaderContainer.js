import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';


const HeaderContainer = props => {
  return (
    <div className = {props.className}>
      <ImageThumbnail className="Header__thumbnail"/>
      <HeaderContent className="Header__content"/>
    </div>
  );
}

export default HeaderContainer;

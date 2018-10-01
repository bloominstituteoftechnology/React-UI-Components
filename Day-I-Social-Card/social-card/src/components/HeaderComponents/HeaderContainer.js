import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js'
import HeaderTitle from './HeaderTitle.js'
import HeaderContent from './HeaderContent.js'

const HeaderContainer = (props) => {
  return (
    <div>
    <div className="headerTitlethumbnail">
      <ImageThumbnail />
      <HeaderTitle />
      </div>
      <HeaderContent />
      </div>
  );
}

export default HeaderContainer;
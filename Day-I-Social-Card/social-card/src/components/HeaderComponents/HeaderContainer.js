import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = props => {
  return (
    <div className='headerContainer'>
      <div className = 'avatarBox'>
        <ImageThumbnail />
      </div>
      <div className = 'textBox'>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>  
  );
}


export default HeaderContainer;
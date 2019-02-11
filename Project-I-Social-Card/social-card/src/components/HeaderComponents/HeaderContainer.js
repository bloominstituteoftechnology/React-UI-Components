import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderContainer = () => {
  return (
    <header className='header'>
      <div className="thumbnail">
        <ImageThumbnail />
      </div>
      <div className="post">
        <div className="title">
          <HeaderTitle />
        </div>
        <div className="content header-content">
          <HeaderContent />
        </div>
      </div>
    </header>
  )
}

export default HeaderContainer;

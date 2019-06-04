import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
      <div className='HeaderContainer'>
        <div>
            <ImageThumbnail />
        </div>
        <div className='headertitlecontent'>
            <HeaderTitle />
            <HeaderContent />
        </div>
      </div>
    );
  };

export default HeaderContainer;
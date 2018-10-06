import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'
import ImageThumbnail from './ImageThumbnail'

const HeaderContainer = props => {
  return (
      <div className='container'>
        <ImageThumbnail />
        <div className="contentTitleContainer">
          <HeaderTitle/>
          <HeaderContent />
        </div>
      </div>
      )
}

export default HeaderContainer;

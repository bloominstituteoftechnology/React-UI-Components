import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

const HeaderContainer = () => {
  return (
    <div>
      <h1>HeaderContainer</h1>
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  )
}

export default HeaderContainer

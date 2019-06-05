import React from 'react';
import './Header.scss';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

export default function HeaderContainer() {
  return (
    <div className="headerContainer">
      <ImageThumbnail />
      <HeaderTitle />
    </div>
  )
}

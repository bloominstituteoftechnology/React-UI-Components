import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
  return (
    <div className="row d-flex flex-nowrap header-row">
      <div className="img-col col-sm-1">
        <ImageThumbnail />
      </div>
      <div className="col-sm-11">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  )
}

export default HeaderContainer
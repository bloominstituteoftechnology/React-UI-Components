import React from 'react';

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import Thumbnail from './ImageThumbnail';

import './Header.css';



const HeaderContainer = () => {
  return (

  <div className = "header-container">

    <Thumbnail />
    <HeaderTitle />
    <HeaderContent />
</div>

  )
}

export default HeaderContainer

import React from 'react';
import './Header.css';
import HeaderTitleText from '../HeaderComponents/HeaderTitleText';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail';

const HeaderContainer = () => (
  <div className='header-container'>

    <ImageThumbnail />
    <HeaderTitleText />

  </div>
)
export default HeaderContainer;
import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div>
      <div>
        <ImageThumbnail />
        <h1>Lambda School</h1>
        <span></span>
        <HeaderContent />
      </div>
    </div>)
};

export default HeaderTitle;

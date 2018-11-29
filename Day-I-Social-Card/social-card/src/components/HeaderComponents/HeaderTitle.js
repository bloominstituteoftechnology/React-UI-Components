import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderTitle = (props) => {
  return (    
    <div className="header-title">
      <ImageThumbnail />
      <HeaderContent />
    </div>
  )
}
  
export default HeaderTitle;

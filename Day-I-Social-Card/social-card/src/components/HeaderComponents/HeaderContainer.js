import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

import './Header.css';

const headerContainer = (props) => {
  return (
    <div className="header">
      <ImageThumbnail />
      <div className="headerText">
        <HeaderTitle />
        <HeaderContent />        
      </div>
    </div>
  );
};

export default headerContainer;
import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
	return (
    <div className="headerAll">
      <div className="headUpper">
        <ImageThumbnail />
  		  <HeaderTitle />
      </div>
      <div classname="headLower">
      <HeaderContent />
      </div>
    </div>
  )
};

export default HeaderContainer;

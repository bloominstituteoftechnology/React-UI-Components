import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return(
    <div className = "headerContainer">
      <div className="leftPart">
      <ImageThumbnail />
      </div>  
      <div className='rightPart'>
      <HeaderTitle />
      <HeaderContent />
      </div>
    </div>
    );
};

export default HeaderContainer;
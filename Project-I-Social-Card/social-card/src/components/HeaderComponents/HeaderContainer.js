import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = (props) => {
    console.log('hi');
  return(
    <div className="Header-Header">
      <div>
        <ImageThumbnail/>
      </div>
      <div className="Header-title-content" >
        <HeaderTitle />
        <HeaderContent />
      </div>



    </div>
  )
}


export default HeaderContainer;

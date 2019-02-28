import React from "react";
import "./Header.css";


import ImgThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';



const HeaderContainer = props => {
  return (
    <div className='HeaderContainer'>
      <ImgThumbnail />
      <div className="right">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  )
}

export default HeaderContainer;



import React from 'react';
import './Header.css';


import ImgThumbnail from './ImageThumbnail';
import HeaderTextContainer from './HeaderTextContainer';


const HeaderContainer = () => {
   return (
       <div className = "top-card">
           <ImgThumbnail />
           <HeaderTextContainer />
       </div>
       
   )
};

export default HeaderContainer;
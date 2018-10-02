import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
const HeaderContainer = () =>{
    return(
        <div>
       <div class='header'> <ImageThumbnail /><HeaderTitle /> </div><div class ='header-content'>
         <HeaderContent />
         </div>
         </div>
    )
};


export default HeaderContainer;
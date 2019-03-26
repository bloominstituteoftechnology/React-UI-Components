import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from "./HeaderTitle";


function HeaderContainer ()  {
    return (
        <div className= "header-container">
        <ImageThumbnail />
        <HeaderTitle />
        </div>
    );
}

export default HeaderContainer;
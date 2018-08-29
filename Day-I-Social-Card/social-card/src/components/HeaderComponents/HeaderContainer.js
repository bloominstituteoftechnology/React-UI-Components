import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";


const HeaderContainer = () => (
    <div className="header">
        <div className="header__image">
            <ImageThumbnail />
        </div>
        <div className="header__text">
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
);
  

export default HeaderContainer;
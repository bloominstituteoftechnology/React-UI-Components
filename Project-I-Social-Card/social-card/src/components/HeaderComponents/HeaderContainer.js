import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";
import  HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => {
    return (
        <div class= 'header-container'>
        <ImageThumbnail />
        <div class = "header-r">
        <HeaderTitle />
        <HeaderContent />
        </div>
    </div>
    );
};

export default HeaderContainer;

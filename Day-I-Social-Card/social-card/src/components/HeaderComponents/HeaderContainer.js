import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";


const HeaderContainer = () => {
    return (
    <div className="header-container">
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderContent />
    </div>
    );
};

export default HeaderContainer

import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail/>
            <HeaderTitle/>
            <HeaderContent/>
        </div>
    )
};

export default HeaderContainer;
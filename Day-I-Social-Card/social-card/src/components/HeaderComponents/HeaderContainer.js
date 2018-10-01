import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => {
    return (
    <div className="header-container">
        <ImageThumbnail image="https://ibin.co/3whrpKSBbZ81.png" />
        <HeaderContent />
    </div>
)};

export default HeaderContainer;
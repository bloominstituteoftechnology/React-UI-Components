import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from "./HeaderContent.js";

const HeaderContainer = () => {

    return (
        <header className="header-container">
        <div className="img-container">
        <ImageThumbnail />
        </div>
        <div className="content-container">
        <HeaderTitle />
        <HeaderContent />
        </div>
        </header>
        
    );
}

export default HeaderContainer; 

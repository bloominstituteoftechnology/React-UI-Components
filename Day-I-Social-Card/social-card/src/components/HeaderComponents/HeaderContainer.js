import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumnail.js';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return(
        <div className = "header-container">
        <ImageThumbnail />
        <div className = "header-text">
        <HeaderTitle />
        <HeaderContent />
        </div>
    </div>
    )
}

export default HeaderContainer;
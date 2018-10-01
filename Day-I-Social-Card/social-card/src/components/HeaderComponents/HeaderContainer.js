import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContentContainer from './HeaderContentContainer.js';

const HeaderContainer = () => {
    return (
    <div className="headerContainer">
        <ImageThumbnail />
        <HeaderContentContainer />
    </div>
    );
}

export default HeaderContainer;
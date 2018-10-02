import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = () => {
    return (
        <div className="headerContainer">
            <ImageThumbnail />
            <HeaderContent />
        </div>
    );
}

export default HeaderContainer;
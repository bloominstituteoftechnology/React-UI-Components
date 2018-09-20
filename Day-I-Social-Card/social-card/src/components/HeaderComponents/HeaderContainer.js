import React from 'react';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';

const HeaderContainer = () => {
    return (
        <div class="header-container">
            <ImageThumbnail />
            <HeaderContent />
        </div>
    )
};

export default HeaderContainer;
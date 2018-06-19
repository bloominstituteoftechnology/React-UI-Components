import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className="header-wrapper">
            <HeaderContent />
            <ImageThumbnail />
        </div>
    )
};

export default HeaderContainer;
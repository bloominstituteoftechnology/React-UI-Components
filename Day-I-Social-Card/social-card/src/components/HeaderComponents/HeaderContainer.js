import React from 'react';
import './Header.css';
import './reset.css';
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <div className="header-container_text">
            <HeaderTitle />
            <HeaderContent />
            </div>
        </div>
    );
};

export default HeaderContainer;
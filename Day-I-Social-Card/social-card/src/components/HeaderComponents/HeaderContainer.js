import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
     <div className="header-wrapper">
        <ImageThumbnail />
        <div className="header-text">
        <HeaderTitle />
        <HeaderContent />
        </div>
    </div>
    );
}

export default HeaderContainer;
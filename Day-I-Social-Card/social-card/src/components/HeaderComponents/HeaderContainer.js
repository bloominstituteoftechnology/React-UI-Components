import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
    <div className="header-wrapper">
        <div className="image-thumbnail">
            <ImageThumbnail />
        </div>
        <div className="header-content">
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
    );
};

export default HeaderContainer;
import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = proprs => {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <div className="header-title-and-content-container">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
};

export default HeaderContainer;
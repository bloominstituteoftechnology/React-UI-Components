import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
const HeaderContainer = () => {
    return (
        <div className="Header-Wrapper">Header Container
            <div className="image-logo">
                <ImageThumbnail />
            </div>
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
};

export default HeaderContainer;
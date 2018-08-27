import React from 'react';
import HeaderContent from '../HeaderComponents/HeaderContent';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail';
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
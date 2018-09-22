import React from 'react';
import './Header.css';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail.js';
import HeaderTitle from '../HeaderComponents/HeaderTitle.js';
import HeaderContent from '../HeaderComponents/HeaderContent.js';

const HeaderContainer = () => {
    return (
        <div className = "Header-Container">
            <ImageThumbnail />
            <div className = "header-text">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderContainer;
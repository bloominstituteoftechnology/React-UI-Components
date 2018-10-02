import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderThumbnail from './ImageThumbnail'

const HeaderContainer = () => {
    return (
        <div class="header-container">
            <HeaderThumbnail />
            <HeaderContent />
        </div>
    );
};
export default HeaderContainer;

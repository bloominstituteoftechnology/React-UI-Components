import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail';
const HeaderContainer = () => {
    return (
    <header>
        <ImageThumbnail />
        <div className='header-info'>
            <HeaderTitle />
            <HeaderContent />
        </div>
    </header>
    )
};

export default HeaderContainer;
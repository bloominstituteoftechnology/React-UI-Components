import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = () => {
    return (
        <div className='header-wrapper'>
        <ImageThumbnail />
        <HeaderContent />
        </div>
    );
}

export default HeaderContainer;
import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = () => {
    return (
        <div className='header'>
            <div className ='header-logo'>
                <ImageThumbnail className ='logo'/>
            </div>
            <div className='header-content'>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderContainer;
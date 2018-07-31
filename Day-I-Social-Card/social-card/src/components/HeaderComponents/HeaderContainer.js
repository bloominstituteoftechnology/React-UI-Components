import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => (
    <div className='header-container'>
        <ImageThumbnail />
        <HeaderContent />
            <HeaderTitle />
    </div>
);

export default HeaderContainer;
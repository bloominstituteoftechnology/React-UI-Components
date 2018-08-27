import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => (
    <div className='header-container'>
        <ImageThumbnail />
        <HeaderTitle />
        
    </div>
);

export default HeaderContainer;
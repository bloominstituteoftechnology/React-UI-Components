import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import HeaderBody from './HeaderBody';

const HeaderContainer = () => {
    return (
        <div className='header-container'>
            <ImageThumbnail />
            <HeaderBody />
        </div>
        
    );
}

export default HeaderContainer;
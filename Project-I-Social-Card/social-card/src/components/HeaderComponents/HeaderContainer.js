import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return ( 
        <div className='header-container'>
        <ImageThumbnail/>
        <div className='content-container'>
        <HeaderContent/>
        </div>
        </div>
    )
}

export default HeaderContainer;

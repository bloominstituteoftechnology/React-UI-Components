import React from 'react';
import './Header.scss';
import "./HeaderContent";
import "./HeaderTitle";
import "./ImageThumbnail";
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <header>
            <ImageThumbnail/>
            <HeaderContent/>
        </header>
    )
}

export default HeaderContainer;

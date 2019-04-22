import React from 'react';
import './Header.css';
import "./HeaderContent";
import "./HeaderTitle";
import "./ImageThumbnail";
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div>
            <ImageThumbnail/>
            <HeaderContent/>
        </div>
    )
}

export default HeaderContainer;

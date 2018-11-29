import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from './HeaderContent';

const HeaderContainer = props => {
    return <div class="header-wrapper">
        <ImageThumbnail />
        <HeaderContent />
    </div>
}

export default HeaderContainer;
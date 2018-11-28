import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => {
    return <div class="header-wrapper">
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
    </div>
}

export default HeaderContainer;
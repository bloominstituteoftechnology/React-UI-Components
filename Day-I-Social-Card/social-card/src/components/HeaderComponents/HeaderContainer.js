import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
// import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <HeaderTitle />
        </div>
    )
}

export default HeaderContainer;

//container lambda thumbnail
//containers lambda tweet content
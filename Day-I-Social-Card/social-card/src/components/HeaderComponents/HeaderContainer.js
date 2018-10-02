import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
        <header className ='headerContainer'>
            <div className = 'imageContainer'>
                <ImageThumbnail />
            </div>
            <div className = 'contentContainer'>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </header>
    )
}

export default HeaderContainer;
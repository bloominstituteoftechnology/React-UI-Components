import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <header>
            <ImageThumbnail />
            <div>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </header>
    );
}

export default HeaderContainer;
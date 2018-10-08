import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return(
        <header className = 'header-container'>
           <ImageThumbnail />
           <HeaderTitle /> 
        </header>
    );
};

export default HeaderContainer;
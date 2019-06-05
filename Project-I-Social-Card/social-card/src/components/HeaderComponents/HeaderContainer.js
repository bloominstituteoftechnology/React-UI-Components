import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';




// Create a <HeaderContainer /> container component that will hold your header components.

function HeaderContainer(){
    return (
        <header className="header-container">
            <ImageThumbnail /> 
            <HeaderTitle /> 
        </header>
    );
 }

export default HeaderContainer;

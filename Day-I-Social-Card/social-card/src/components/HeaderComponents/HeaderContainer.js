import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent'
import ImageThumbnail from './ImageThumbnail';

//Create a <HeaderContainer /> container component that will 
//hold your header components.

function HeaderContainer(props){
    return (
        <header className="header">
            <ImageThumbnail />
            <HeaderContent />
        </header>
    );
}

export default HeaderContainer;
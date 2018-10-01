import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer  = props => {
   return (
    <header className = "headerStyle">
        <ImageThumbnail/>
        <HeaderTitle></HeaderTitle>
        <HeaderContent></HeaderContent>
    </header>
);
};


export default HeaderContainer;



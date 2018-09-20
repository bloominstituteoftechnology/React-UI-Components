import React from 'react';
import './Header.css';
import './HeaderTitle';
import './ImageThumbnail';
import'./HeaderContent';

const HeaderContainer = () => {
    return (

        <header>
            <HeaderTitle/>
            <ImageThumbnail/>
            <HeaderContent/>
        </header>

    )};

export default HeaderContainer;
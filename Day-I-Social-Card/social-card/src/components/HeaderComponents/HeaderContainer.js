import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (

        <header>
            <HeaderTitle/>
            <HeaderContent/>
        </header>

    )};

export default HeaderContainer;
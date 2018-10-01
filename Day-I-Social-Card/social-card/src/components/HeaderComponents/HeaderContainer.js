import React from 'react';
import './Header.css';
import LogoImage from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
const HeaderContainer = (props) => {
    return (
        <div>
            <LogoImage />
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
}

export default HeaderContainer;
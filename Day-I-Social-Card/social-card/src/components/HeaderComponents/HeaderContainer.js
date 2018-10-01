import React from 'react';
import './Header.css';
import Logo from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <header>
            <Logo />
            <div className="headerContent">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </header>
    );
}

export default HeaderContainer;
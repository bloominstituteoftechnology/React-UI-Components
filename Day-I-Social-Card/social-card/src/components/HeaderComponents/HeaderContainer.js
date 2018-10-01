import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = props => {
    return (
        <header className="header-container">
            <ImageThumbnail/>
            <div>
                <HeaderTitle/>
                <HeaderContent/>
            </div>
        </header>
        
    );
}

export default HeaderContainer;
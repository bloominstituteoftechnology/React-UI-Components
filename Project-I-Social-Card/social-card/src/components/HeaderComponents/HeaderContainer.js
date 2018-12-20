import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js'
import HeaderTitle from './HeaderTitle.js'

const HeaderContainer = props => {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <HeaderTitle />
        </div>
    );
};

export default HeaderContainer;
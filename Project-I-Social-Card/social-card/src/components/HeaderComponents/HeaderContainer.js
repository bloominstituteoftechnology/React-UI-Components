import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <HeaderTitle />
        </div>
    );
};

export default HeaderContainer;
import React from 'react';
import './Header.css';

import Header from './Header';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className="header-container">
        <ImageThumbnail />
        <Header />
       
        </div>
    )
}

export default HeaderContainer;
import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div className="HeaderContainer">
        
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        
        </div>
    );
}

export default HeaderContainer;
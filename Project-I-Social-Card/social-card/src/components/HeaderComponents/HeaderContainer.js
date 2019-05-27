import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
    return (
        <div>
            <ImageThumbnail />
            <HeaderContent />
        </div>
    )
}

export default HeaderContainer;
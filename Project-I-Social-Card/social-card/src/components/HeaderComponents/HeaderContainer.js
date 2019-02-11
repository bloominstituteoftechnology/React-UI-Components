import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
    return (
        <div className="HeaderContainer">
            <HeaderTitle />
            <ImageThumbnail />
            <HeaderContent />
        </div>
    )
}

export default HeaderContainer;
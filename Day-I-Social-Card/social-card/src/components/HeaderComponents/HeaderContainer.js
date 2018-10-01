import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = (props) => {
    return (
        <div className="header-container">
            <HeaderTitle />
            <ImageThumbnail />
            <HeaderContent />
        </div>
    );
}

export default HeaderContainer;

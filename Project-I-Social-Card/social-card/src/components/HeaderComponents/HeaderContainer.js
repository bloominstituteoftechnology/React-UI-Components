import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
        <div className="container">
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent/>
        </div>
    );
}

export default HeaderContainer;
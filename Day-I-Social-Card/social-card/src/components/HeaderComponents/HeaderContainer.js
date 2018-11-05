import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <React.Fragment>
            <ImageThumbnail />
            <HeaderContent />
        </React.Fragment>
    );
} 

export default HeaderContainer;
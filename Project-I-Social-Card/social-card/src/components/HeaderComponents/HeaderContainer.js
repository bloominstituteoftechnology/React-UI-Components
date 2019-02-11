import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            
            <ImageThumbnail />
            <HeaderTitle />

        
        </div>
    );
};






export default HeaderContainer;
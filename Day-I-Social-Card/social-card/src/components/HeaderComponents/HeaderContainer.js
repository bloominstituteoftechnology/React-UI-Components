import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => {
    return (
        <div className = "header-wrapper">
            <ImageThumbnail />
            <div className = "content-wrapper">
                <HeaderTitle />
                <HeaderContent />
             </div>
        </div>
    );
};

export default HeaderContainer;
import React from 'react';
import './Header.css';
import './ImageThumbnail';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div className="header-wrapper">
            <div>
                <ImageThumbnail />
            </div>
            <div>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
};



export default HeaderContainer;
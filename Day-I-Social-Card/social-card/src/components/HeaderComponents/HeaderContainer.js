import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => {
    return (
    <div className="header">
        <div className="left-side">
            <ImageThumbnail />
        </div>
        <div className="right-side">
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
    )
}

export default HeaderContainer;
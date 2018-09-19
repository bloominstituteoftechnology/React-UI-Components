import React from 'react';
import './Header.css';
import ImageThumbnail from './HeaderThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


HeaderContainer = () => {
    return (
        <div>
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    )
}

export default HeaderContainer;

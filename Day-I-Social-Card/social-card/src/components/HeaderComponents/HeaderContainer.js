import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail src="https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg" />
            <HeaderTitle />
        </div>
    )
};

export default HeaderContainer;

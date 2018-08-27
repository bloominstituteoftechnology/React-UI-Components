import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className="container-header"> 
        <ImageThumbail />
        <HeaderTitle />
        </div> 
    );
};

export default HeaderContainer;
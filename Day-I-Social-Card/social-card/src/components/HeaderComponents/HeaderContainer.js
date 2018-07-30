import React from 'react';
import './Header.css';
import './HeaderTitle';
import './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
   return <div className="HeaderContainer">
        <ImageThumbnail />
        <HeaderTitle />
    </div>
}

export default HeaderContainer;

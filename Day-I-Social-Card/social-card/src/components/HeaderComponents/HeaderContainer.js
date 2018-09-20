import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = (props) => {
    return (
        <div>
            <ImageThumbnail />
            <HeaderTitle />
        </div>
    );
}

export default HeaderContainer;

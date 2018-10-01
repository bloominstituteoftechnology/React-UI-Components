import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = props => {

    return (
        <div>
            <HeaderTitle />
            <HeaderContent />
            <ImageThumbnail />
        </div>
    );
}

export default HeaderContainer;
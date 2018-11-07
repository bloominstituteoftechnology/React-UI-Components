import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle';

function HeaderContainer(props) {
    return (
        <header>
            <ImageThumbnail />
            <HeaderTitle />
        </header>
    );
}

export default HeaderContainer;
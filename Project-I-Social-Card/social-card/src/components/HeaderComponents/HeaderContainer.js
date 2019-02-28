import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
    return (
        <div class = "headContainer">
            
            <div class = "row">
            <ImageThumbnail imgSrc="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"/>
            <HeaderTitle />
            </div>

        <HeaderContent />
        </div>
    );
}

export default HeaderContainer;
import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const headerText = `Let's learn React by building simple interfaces with components, Don’t to overthink it,
just keep it simple and have fun. Once you are comfortable using components you are well on
your way mastering React!`;

function HeaderContainer() {
    return (
        <div className = 'header-container'>
            <ImageThumbnail />
            <HeaderContent text={headerText} />
        </div>
    )
}

export default HeaderContainer;
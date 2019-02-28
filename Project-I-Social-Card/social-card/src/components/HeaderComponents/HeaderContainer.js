import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent'
import ImageThumbnail from './ImageThumbnail'

function HeaderContainer(props) {
    return (
        <div className="twitter-header">
            <ImageThumbnail />
            <HeaderContent name={props.author.name} handle={props.author.handle} />
        </div>
    )
}

export default HeaderContainer
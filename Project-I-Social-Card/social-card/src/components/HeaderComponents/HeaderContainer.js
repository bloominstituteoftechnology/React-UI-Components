import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent'
import ImageThumbnail from './ImageThumbnail'

function HeaderContainer(props) {
    console.log(props)
    return (
        <div className="twitter-header">
            <ImageThumbnail />
            <HeaderContent name={props.twitterHeading.name} handle={props.twitterHeading.handle} />
        </div>
    )
}

export default HeaderContainer
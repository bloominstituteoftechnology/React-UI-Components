import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent.js';
import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = (props) =>  {
    console.log(props.className)
    return(
        <div className="header-container">
            <ImageThumbnail />
            <div className="headerText">
                <HeaderTitle className="header-title"/>
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderContainer;

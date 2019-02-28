import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail"
import HeaderTitle from "./HeaderTitle"
import HeaderContent from "./HeaderContent"

function HeaderContainer() {
    return (
        <div className="header-container">

            <div className="image-thumbnail">
            <ImageThumbnail />
            </div>

            <div className="header-content">
            <HeaderTitle />
            <HeaderContent />
            </div>
            

        </div>
    );
}

export default HeaderContainer;
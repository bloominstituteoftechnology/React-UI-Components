import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail"
import HeaderTitle from "./HeaderTitle"
import HeaderContent from "./HeaderContent"

const HeaderContainer = () => {
    return (
        <div>
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    )
}
/* each component can only have one div, although u can nest divs in divs. */

export default HeaderContainer;
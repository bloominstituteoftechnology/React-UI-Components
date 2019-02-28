import React from 'react';
import './Header.css';

import ImageThumbNail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";


function HeaderContainer() {
    return (
        <div className="HeadCon">
            <ImageThumbNail />
            <HeaderTitle />
        </div>
    );
};

export default HeaderContainer;

import React from 'react';
import './Header.css';

import Header from "./HeaderContent";
import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => {
    return (
        <div className="header-cont">
            <div className="header-img">
            <ImageThumbnail/>
            </div>
            <div className="header-text">
                <div className="header-title">
                <HeaderTitle/>
                </div>

                <div className="header-paragraph">
                <Header/>
                </div>
            </div>

        </div>
    );
}

export default HeaderContainer;
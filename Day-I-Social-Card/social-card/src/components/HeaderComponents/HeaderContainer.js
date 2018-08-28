import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderTitle from "./HeaderTitle.js";


const HeaderContainer = () => (
    <div className="header-container">
        <ImageThumbnail/>
        <HeaderTitle/>
    </div>
);

export default HeaderContainer;
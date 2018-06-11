import React from 'react';
import './Header.css';
// import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
// import HeaderTitle from "./components/HeaderComponents/HeaderTitle";

import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
 

const HeaderContent = () => {
    return (
        <div className = "header-content">
            <ImageThumbnail />
            <HeaderTitle />
        </div>
    );
};

export default HeaderContent; 
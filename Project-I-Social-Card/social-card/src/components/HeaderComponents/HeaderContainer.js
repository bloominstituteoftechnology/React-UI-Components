import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <HeaderContent />
        </div>
    );
};

export default HeaderContainer;
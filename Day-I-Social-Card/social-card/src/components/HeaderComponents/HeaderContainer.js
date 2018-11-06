import React from 'react';
import './Header.css';
import ImgThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";
import HeaderTitle from "./HeaderTitle";

const HeaderContainer = () =>{
    return(
        <div className = "header-container">
            <div className = 'header-content'>
                <ImgThumbnail />
                <div className = "header-text-content">
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
        </div>
    )
}
export default HeaderContainer;
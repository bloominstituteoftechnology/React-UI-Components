import React from 'react';
import './Header.css';
import ImgThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";
import HeaderTitle from "./HeaderTitle";

const HeaderContainer = () =>{
    return(
        <div className = "container">
            <div className = 'content'>
                <ImgThumbnail />
                <div className = "text-content">
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
        </div>
    )
}
export default HeaderContainer;
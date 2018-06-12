import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <ImageThumbnail />
                </div>
                <div className="col-lg-8">
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
        </div>
    );
};

export default HeaderContainer;
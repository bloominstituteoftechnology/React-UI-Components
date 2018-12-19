import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

function HeaderContainer() {
    return (
        <div className="header">
            <div>
                <ImageThumbnail/>
            </div>
            <div className="header-text">
                <HeaderTitle title="Lambda School" handle="@LambdaSchool" date="26 Jan"/>
                <HeaderContent/>
            </div>
        </div>
    )
}

export default HeaderContainer;
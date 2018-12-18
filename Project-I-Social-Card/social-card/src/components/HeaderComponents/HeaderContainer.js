import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

function HeaderContainer() {
    return (
        <React.Fragment>
            <ImageThumbnail/>
            <HeaderTitle title="Lambda School"/>
            <HeaderTitle handle="@LambdaSchool"/>
            <HeaderTitle date="26 Jan"/>
            <HeaderContent/>
        </React.Fragment>
    )
}

export default HeaderContainer;
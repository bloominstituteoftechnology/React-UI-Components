import React from 'react';
import './Header.css';

import HeaderTitle from "./HeaderTitle";
import HeaderThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";

const HeaderContainer =()=> {
    return (
        <div className ="headerContainer">
            <HeaderThumbnail/>
            <div classsName ="hearderContent">
                <HeaderTitle/>
                <HeaderContent/>
            </div>
        </div>
    );

}

export default HeaderContainer;


    




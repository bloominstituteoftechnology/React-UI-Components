import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
    return (
        <div>
            {/*<ImageThumbnail/>*/}
            <div>
                <HeaderTitle/>
                <HeaderContent/>
            </div>
        </div>
    );
};

export default HeaderContainer
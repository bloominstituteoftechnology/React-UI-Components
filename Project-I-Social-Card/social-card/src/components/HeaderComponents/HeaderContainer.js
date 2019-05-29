import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

function HeaderContainer() {
    return <div className="header"> 
                <ImageThumbnail />
                <div className="headermain">
                    <HeaderTitle />
                </div>
            </div>
}

export default HeaderContainer;
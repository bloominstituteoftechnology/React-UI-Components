import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
    return <div className="header"> 
                <h1>test</h1>
                <ImageThumbnail />
                <div className="headermain">
                </div>
            </div>
}

export default HeaderContainer;
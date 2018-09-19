import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = (props) =>{
    return (
        <div className="header-container">
            <ImageThumbnail />
        </div>
    )
}

export default HeaderContainer;
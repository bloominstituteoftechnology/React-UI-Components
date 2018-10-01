import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import HeaderThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';


const HeaderContainer = () => {
    return (
        <div className = "head-cont">
            <HeaderThumbnail />
            <div className = "title-content">
                <HeaderTitle />
                <HeaderContent />   
            </div>

        </div>
    );
}

export default HeaderContainer;
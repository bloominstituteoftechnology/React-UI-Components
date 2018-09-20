import React from 'react';
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'
import ImageThumbnail from './ImageThumbnail'
const HeaderContainer = () => {
    return (        
        <div className= "header-container">
            <div className="header-section">
                <HeaderTitle/>
                <HeaderContent/>
            </div>
        </div>

    )
};


export default HeaderContainer;
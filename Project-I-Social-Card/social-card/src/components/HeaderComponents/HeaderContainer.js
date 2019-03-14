import React from 'react';

// import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

import './Header.css';

const HeaderContainer = () => {
    return (
        <div className = "header-container">
            <ImageThumbnail />
            <HeaderContent />        
        </div>
    );
};

export default HeaderContainer;
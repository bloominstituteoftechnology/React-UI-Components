import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = () => {
   return (
    <div>
        <div className="lambdaLogo">
            <ImageThumbnail />
        </div>
        <div className="header">
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
   );
}

export default HeaderContainer;
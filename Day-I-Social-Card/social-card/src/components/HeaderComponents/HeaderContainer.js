import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = content => {
    return (
        <div className ="header-container">
            <ImageThumbnail />
            <div className="header-container-top">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
  };

export default HeaderContainer;
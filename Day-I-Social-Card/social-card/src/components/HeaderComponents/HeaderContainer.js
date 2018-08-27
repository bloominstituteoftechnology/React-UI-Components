import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent.js';

import ImageThumbnail from './ImageThumbnail.js'

const HeaderContainer = () => (
    <div className="header-container">
       
        <ImageThumbnail />
        <HeaderContent />
    </div>
)

export default HeaderContainer;
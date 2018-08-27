import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent.js';

import ImageThumbnail from './ImageThumbnail.js'

const HeaderContainer = () => (
    <div class="header-container">
       
        <ImageThumbnail />
        <HeaderContent />
    </div>
)

export default HeaderContainer;
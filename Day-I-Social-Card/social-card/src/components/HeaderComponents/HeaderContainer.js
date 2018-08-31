import React from 'react';
import './Header.css';

import './HeaderContent';
import './HeaderTitle';
import './ImageThumbnail'; 
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className='headerContainer'>
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    )
}

export default HeaderContainer;
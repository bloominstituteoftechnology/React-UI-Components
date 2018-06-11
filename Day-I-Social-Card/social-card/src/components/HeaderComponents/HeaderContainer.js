import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
    return (
        <div className='header-container-wrapper'>
            <ImageThumbnail />
            <div className='right-content'>
                <HeaderTitle />
                <HeaderContent />
            </div>
            
        </div>
    )
}

export default HeaderContainer;

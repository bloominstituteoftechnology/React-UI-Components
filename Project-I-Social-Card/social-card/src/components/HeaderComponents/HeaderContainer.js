import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

// Name header Component
const HeaderContainer = () => {
    return (
        <div className='header'>
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    )
}

// Export the deafult
export default HeaderContainer;
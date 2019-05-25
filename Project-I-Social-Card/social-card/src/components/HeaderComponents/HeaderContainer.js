import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent'

function HeaderContainer () {
    return(
        <div className='header-container'>
            <ImageThumbnail />
            <div className='header-info'>
                <HeaderTitle />
                <div className='header-content'>
                    <HeaderContent />
                </div>
            </div>
        </div>
    )
}

export default HeaderContainer;
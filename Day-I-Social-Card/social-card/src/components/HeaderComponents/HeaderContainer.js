import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = props => {
    return ( 
        <div className='header-container'>
            <div className='header-logo-div'>
                <ImageThumbnail />
            </div>
            <div className='header-text-container'> 
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
        
}

export default HeaderContainer;



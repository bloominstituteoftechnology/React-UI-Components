import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';


const HeaderContainer = () => {
    return (
        <div className='header'>
            <div className='headerImg'>
                <ImageThumbnail />
            </div>
            <div className ='headerContent'>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
};

export default HeaderContainer;

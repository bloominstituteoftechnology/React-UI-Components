import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => (
    <div className='header-container'>
        <div className='left-column'>
            <ImageThumbnail />
        </div>
        <div className='right-head right-column'>
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
);

export default HeaderContainer;

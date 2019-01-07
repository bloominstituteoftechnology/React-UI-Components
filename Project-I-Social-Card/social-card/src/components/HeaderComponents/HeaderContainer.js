import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent'
import HeaderTitle from './HeaderTitle'
import HeaderThumbnail from './ImageThumbnail'


const HeaderContainer = () => {
    return (
        <div className='header-container'>
            <HeaderThumbnail/>
            <div className='head'>
            <HeaderTitle/>
            <HeaderContent/>
            </div>
        </div>
    );
};

export default HeaderContainer;
import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import Logo from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className='header-container'>
        <div className='header'>
        <Logo />
        <HeaderTitle />
         </div>
        <HeaderContent />
       
        </div>
    )

};

export default HeaderContainer;
import React from 'react';
import './Header.css';
import LogoImage from './ImageThumbnail';
import HeaderInformation from './HeaderInformation';
const HeaderContainer = (props) => {
    return (
        <div className='header'>
            <LogoImage />
            <HeaderInformation />
        </div>
    );
}

export default HeaderContainer;
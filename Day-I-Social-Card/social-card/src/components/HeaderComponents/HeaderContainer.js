import React from 'react';
import './Header.css';
import LambdaLogo from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';



const HeaderContainer = props => {
    return(
        <div className='headerContainer'>
            <LambdaLogo />
        <div className = 'headerContent'>
            <HeaderTitle />
            <HeaderContent />
        </div>
        </div>
    )
}

export default HeaderContainer;
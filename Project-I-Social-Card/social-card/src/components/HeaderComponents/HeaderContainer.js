import React from 'react';
import HeaderImage from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'
import './Header.css';

const HeaderContainer = () => {
    return(
        <div className="header-container">
        <HeaderImage />
            <div>     
                <HeaderTitle />
                <HeaderContent /> 
            </div>  
        </div>
    )
}

export default HeaderContainer;
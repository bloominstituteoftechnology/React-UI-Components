import React from 'react';
import './Header.css';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail';
import HeaderContentContainer from '../HeaderComponents/HeaderContentContainer';

const HeaderContainer = ()=>{
    return (
    <div className="header-container"> 
        <ImageThumbnail />
        <HeaderContentContainer>

        </HeaderContentContainer>
    </div>
    );
}

export default HeaderContainer;
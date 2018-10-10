import React from 'react';
import './Header.css';
import HeaderTitle from '../HeaderComponents/HeaderTitle';
import ImageThumbnail from '..//HeaderComponents/ImageThumbnail';

const HeaderContainer = props =>{
    return (
        <div>
            <HeaderTitle />
            <ImageThumbnail />
        </div>
        
    )
};

export default HeaderContainer;

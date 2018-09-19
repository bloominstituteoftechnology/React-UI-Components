import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';


const HeaderContainer = () => { 
    return (
        <div class="HeaderContainer">
            <HeaderTitle />
            <ImageThumbnail />
            <HeaderContent />
            </div>
    )
}

export default HeaderContainer;
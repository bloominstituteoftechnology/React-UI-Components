import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
const HeaderContainer = () => {
    return <div className="header-wrapper">
    <div className= "logo">
    <ImageThumbnail />
    </div>
    <div clasname="header-text"><HeaderTitle />
    
    <HeaderContent />
    </div>
    
    </div>;
};

export default HeaderContainer;
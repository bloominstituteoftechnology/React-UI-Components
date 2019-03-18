import React from 'react';
import './Header.css';
import ImageThumbnail from'./ImageThumbnail';
import HeaderTitle from './HeaderTitle';


const HeaderContainer = () => { 
    return (
    <div className="containerHeader">
    <ImageThumbnail/>
    <HeaderTitle/>
    </div>
    
    
    );
}

export default HeaderContainer;
import React from 'react';
import './Header.css';
import './HeaderTitle'
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from '.'

const HeaderContainer = () =>{
    return(
        <div className = "Header-container">
            <ImageThumbnail />
            <HeaderContent />
     
        </div>    
    )
};

export default HeaderContainer;
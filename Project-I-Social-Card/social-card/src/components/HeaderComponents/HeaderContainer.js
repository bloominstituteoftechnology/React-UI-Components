import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle'
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = props =>{

    return (
    
    <div className="container">
        <ImageThumbnail />
        <HeaderTitle />
        
        
       
    
    </div>
    )
}


export default HeaderContainer
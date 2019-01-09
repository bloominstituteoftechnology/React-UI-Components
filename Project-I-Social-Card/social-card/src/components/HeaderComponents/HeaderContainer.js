import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

function HeaderContainer() {
    return(
        <div className="HeaderContainer">
        
        <ImageThumbnail />
        <div className="HeaderText">
            <HeaderTitle />
            <HeaderContent />
        </div>
        

        </div>
    )
        
    
}


export default HeaderContainer;

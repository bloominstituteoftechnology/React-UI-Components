import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent';
import HeaderTitle from'./HeaderTitle';
import ImageThumbnail from './ImageThumbnail';


const HeaderContainer = () => {
    return (
        <div className="whole-section">
            <ImageThumbnail />
        <div>
            <HeaderTitle />
        
            <HeaderContent />

        </div>
        
        </div> // whole div 
        
    )
}


export default HeaderContainer;

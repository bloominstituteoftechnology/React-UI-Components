import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent';
import HeaderTitle from'./HeaderTitle';
import ImageThumbnail from './ImageThumbnail';


const HeaderContainer = () => {
    return (
        <div>
            <ImageThumbnail />

            <HeaderTitle />
            <HeaderContent />
        </div>
        
    )
}


export default HeaderContainer;

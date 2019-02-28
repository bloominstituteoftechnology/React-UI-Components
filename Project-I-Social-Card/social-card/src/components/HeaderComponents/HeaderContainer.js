import React from 'react';
import './Header.css';

import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from './ImageThumbnail';


function HeaderContainer() {
    return (
        <div class="Header">
         <ImageThumbnail />

            <div clas="Header-Content">   
                <HeaderTitle />
                <HeaderContent />
            </div> 
        </div>
    );
}

export default HeaderContainer;

import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
function HeaderContainer(){
    return(
        <React.Fragment>
            <ImageThumbnail src = 'https://ibin.co/3whrpKSBbZ81.png'/>
            <HeaderContent title = 'Lambda School'/>
        </React.Fragment>
    );
}
export default HeaderContainer;
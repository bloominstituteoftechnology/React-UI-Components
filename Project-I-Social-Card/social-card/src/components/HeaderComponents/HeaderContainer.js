import React from 'react';
import './Header.css';
// import'./HeaderContent.js';
// import './ImageThumbnail.js'
// import HeaderContainer from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';



function HeaderContainer() {
return (
    <div className=""HeaderContainer>
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderContent />
    </div>
)
}

export default HeaderContainer
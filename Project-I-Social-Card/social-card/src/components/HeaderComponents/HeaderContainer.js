import React from 'react';
import './Header.css';



import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => (
    <div>
        <ImageThumbnail />
        <HeaderContent />
    </div>
)



export default HeaderContainer;
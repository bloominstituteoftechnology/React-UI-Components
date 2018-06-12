import React from 'react';
import './Header.css';
// MY CODE BELOW
import ImageThumbnail from './ImageThumbnail' ;
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
    return <div className="header-content">
    {/* Header Content */}
    <ImageThumbnail />
    <HeaderTitle />

    </div> 
} ;

export default HeaderContent ;
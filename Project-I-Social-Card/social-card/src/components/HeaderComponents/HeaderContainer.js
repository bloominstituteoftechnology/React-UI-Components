import React from 'react';
import './Header.css';
// import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';


function HeaderContainer(props) {
    const a = 'hello'
    return (
    
    <div className='head-contain'>
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
    </div>
    )
}

export default HeaderContainer;
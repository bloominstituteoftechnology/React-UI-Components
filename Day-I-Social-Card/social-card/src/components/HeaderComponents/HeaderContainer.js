import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import LambdaTitle from './HeaderTitle';
import ImgThumb from './ImageThumbnail';

const MyHeader = () => {
    return (
     <div className="header-container">
        <ImgThumb />
        <div className="header-text">
            <LambdaTitle />
            <HeaderContent />
        </div>
    </div>
    )
}

export default MyHeader;
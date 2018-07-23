import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail'
import './Header.css';

const headerContainer = () => {
    return (
        <div>
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    )
}

export default headerContainer;
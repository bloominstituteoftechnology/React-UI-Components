import React from 'react';
import headerTitle from './HeaderTitle';
import headerContent from './HeaderContent';
import imageThumbnail from './ImageThumbnail'
import './Header.css';

const headerContainer = () => {
    return (
        <div>
            <ImageThumbnail />
            <headerTitle />
            <headerContent />
        </div>
    )
}

export default headerContainer;
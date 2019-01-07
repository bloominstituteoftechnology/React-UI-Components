import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const Headercontainer = () => {
    return (
        <div className="header">
            <ImageThumbnail/>
            <HeaderTitle/>
        </div>
    );
};

export default Headercontainer;
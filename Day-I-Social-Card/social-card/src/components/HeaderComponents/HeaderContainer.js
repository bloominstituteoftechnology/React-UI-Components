import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = props => {
    return (
        <div className="header">
            <div className="logo"><ImageThumbnail /></div>
            <div className="header-title"><HeaderTitle /></div>
        </div>
);
};

export default HeaderContainer;
import React from 'react';
import HeaderTitle from './HeaderTitle'
import ImageThumbnail from './ImageThumbnail'
import HeaderContent from './HeaderContent'
import './Header.css';

//Create a <HeaderContainer /> container component that will hold your header components.

const HeaderContainer = props => {
    return (
        <div className="header">
            <ImageThumbnail />
            <div className="headerText">
                <HeaderTitle />
                <HeaderContent />
            </div>
            
        </div>
    )   
}

export default HeaderContainer;
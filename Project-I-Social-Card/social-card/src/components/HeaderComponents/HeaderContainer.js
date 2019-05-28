import React from 'react';
import './Header.css';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail'
import HeaderTitle from '../HeaderComponents/HeaderTitle'
import HeaderContent from '../HeaderComponents/HeaderContent'

const HeaderContainer = props => {
    return (
        <div className="header-container">
            <ImageThumbnail />
            
            <div>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderContainer;
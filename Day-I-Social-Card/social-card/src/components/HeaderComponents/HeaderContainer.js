import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
 const HeaderContainer = props => (
    <div className = 'headerBox'>
    <ImageThumbnail />
    <div className = 'headerTitleAndText'>
    <HeaderTitle />
    <HeaderContent />
    </div>
    </div>
)
export default HeaderContainer
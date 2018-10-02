import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = props =>{
    return(
    <div className="postHeader">
        <ImageThumbnail />
        <div className="postText">
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>);
}
export default HeaderContainer;

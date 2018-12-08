import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div className='header_container'>
            <div className="left_side">
                <ImageThumbnail/>
            </div>
            <div className="right_side">
                <HeaderTitle/>
                <HeaderContent/>
            </div>
        </div>      
    );
};

export default HeaderContainer;
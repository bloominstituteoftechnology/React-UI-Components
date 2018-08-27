import React from 'react';
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'
import ImageThumbnail from './ImageThumbnail'
import './Header.css';

const HeaderContainer = () => (
    <div className ="header">
        <div>
            <ImageThumbnail/>
        </div>
        <div>
            <HeaderTitle/>
            <HeaderContent/>
        </div>

    </div>
);

export default HeaderContainer;
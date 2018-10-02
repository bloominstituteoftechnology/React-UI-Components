import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import moment from 'moment';

const HeaderContainer = props => { 
    return (
        <div className = 'headerContainer'>
            <ImageThumbnail/>
            <HeaderContent/>
        </div>
    );
}

export default HeaderContainer;
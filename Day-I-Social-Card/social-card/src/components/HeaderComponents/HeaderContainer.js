import React from 'react';
import './Header.css'
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div>
            <div className='headerContainer'>
                <ImageThumbnail/>
                <HeaderTitle/>
            </div>
            <div>
                <HeaderContent/>
            </div>
        </div>
    );
}


export default HeaderContainer;
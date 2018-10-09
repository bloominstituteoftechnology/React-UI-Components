import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {

    return (

        <div classname='header-container'>
           <ImageThumbnail />
           <div classname='header-titlecontent'>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>

    );

};

export default HeaderContainer;
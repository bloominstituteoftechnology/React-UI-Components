import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = props => {
    return (
        <div className='header-container'>
            <ImageThumbnail />
            <div className='header-body'>
                <HeaderTitle name='Lambda School'/>
                <HeaderContent text="Let's learn React by building simple interfaces with components.  Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"/>
            </div>
        </div>
    );
};

export default HeaderContainer;

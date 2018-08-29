import React from 'react';
import './Header.css';

import UserAvatar from './ImageThumbnail.js';
import Username from './HeaderTitle.js';
import Content from './HeaderContent.js';


const HeaderContainer = () => {
    return (
        <div>
            <UserAvatar />
            <Username />
            <Content />    
        </div>
    );
};

export default HeaderContainer;
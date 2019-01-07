import React from 'react';
import  './Header.css';
import {ImageThumbnail} from './ImageThumbnail';
import {HeaderTitle} from './HeaderTitle';
import {HeaderContent} from './HeaderContent';

export const HeaderContainer = () => <header>
    <ImageThumbnail />
    <div className = 'headerText'>
        <HeaderTitle />
        <HeaderContent />
    </div>
</header>;
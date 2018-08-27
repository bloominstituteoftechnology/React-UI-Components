import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import MainImage from './ImageThumbnail';

const HeaderContainer = () => (
    <div>
        <div>
        <MainImage />
        </div>
        <div>
        <HeaderTitle />
        <HeaderContent />
        </div>
        
    </div>
);

export default HeaderContainer;

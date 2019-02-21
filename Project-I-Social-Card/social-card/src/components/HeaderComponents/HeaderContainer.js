import React from 'react';
import './Header.css';
// import ReactDOM from 'react-dom';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => (
    <div class='headercont'>
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
        
    </div>
);

export default HeaderContainer;
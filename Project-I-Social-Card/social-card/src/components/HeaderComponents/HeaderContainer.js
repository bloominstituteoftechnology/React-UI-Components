import React from 'react';
import './Header.css';
// import ReactDOM from 'react-dom';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => (
    <div>
        <HeaderTitle />
        <HeaderContent />
        <ImageThumbnail />
    </div>
);


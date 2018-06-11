import React from 'react'; // you need this on every component you build
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
   return <div className="header-wrapper">
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderContent />
   </div>;
};

export default HeaderContainer;
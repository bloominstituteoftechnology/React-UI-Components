import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
// import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
    
    <section 
    className="header-wrapper">
    <div className="top-content">  <ImageThumbnail /> <HeaderContent /> </div>
     </section>);
};



export default HeaderContainer;

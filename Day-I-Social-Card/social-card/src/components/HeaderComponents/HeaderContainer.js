import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from "./ImageThumbnail";
const HeaderContainer =  () => {	const HeaderContainer =  () => {
    return (	    return <div className="header">
         <ImageThumbnail />
    <HeaderTitle />	        <HeaderTitle />
    );	        <HeaderContent />
      </div>;
   export default HeaderContainer;
import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";
import HeaderParagraph from "./HeaderParagraph";


function HeaderContainer() {
    return (
        <div className="container">
        <HeaderContent /> 
        <HeaderParagraph /> </div> )
};

export default HeaderContainer;
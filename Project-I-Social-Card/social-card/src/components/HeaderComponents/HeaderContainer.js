import React from 'react';
// import ReactDOM from "react-dom";

import './Header.css';

import HeaderContent from "./components/HeaderComponents/HeaderContent";
import HeaderTitle from "./components/HeaderComponenets/HeaderTitle";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";


function HeaderContainer() {
  return (
    <div className="Header">
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
}

export default HeaderContainer;


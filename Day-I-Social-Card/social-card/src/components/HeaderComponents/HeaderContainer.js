import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContainerLeft from './HeaderContainerLeft';

const HeaderContainer = () => {
  return (<div className="hc-main">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
    <ImageThumbnail />
    <HeaderContainerLeft />
  </div>);
};

export default HeaderContainer;